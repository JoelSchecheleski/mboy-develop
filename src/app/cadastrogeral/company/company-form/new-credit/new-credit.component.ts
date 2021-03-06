// @ts-ignore
import {Component, Inject, OnInit} from '@angular/core';
// @ts-ignore
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
// @ts-ignore
import {NgForm, FormGroup, FormControl, FormBuilder, Validator, Validators, FormArray, NgSelectOption} from '@angular/forms';
// @ts-ignore
import {isNullOrUndefined} from '@swimlane/ngx-datatable/release/utils';
import {CreditService} from '../../../../service/credits/creditService';
import {CreditModel} from '../../../../modules/modelos/creditModel';
import {BillItems} from '../../../../modules/modelos/billItems';
import {PaymentProfile} from '../../../../modules/modelos/paymentProfile';
import {Config} from '../../../../app-config';
import {SettingsServices} from '../../../../service/Settings/SettingsServices';
// @ts-ignore
import Swal from 'sweetalert2';
// @ts-ignore
import {Router} from '@angular/router';
import {MailService} from '../../../../service/mail/mail.service';
import {EmailModel} from '../../../../modules/modelos/emailModel';
// @ts-ignore
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'ms-new-credit',
    templateUrl: './new-credit.component.html',
    styleUrls: ['./new-credit.component.scss'],
    providers: [CreditService, SettingsServices, MailService]
})
export class NewCreditComponent implements OnInit {
    private _baseUrl = new Config().getEndpoint();
    public frmNewCredit: FormGroup;
    public credits = new CreditModel();
    public billsitems = new BillItems();
    public paymentprofile = new PaymentProfile();
    public settings: any;
    public emailSend = new EmailModel();

    public methodPayment = [
        {value: 'credit_card', viewValue: 'Cartão de crédito'},
        {value: 'bank_slip', viewValue: 'Boleto'}
    ]
    selectedPayment: any;

    constructor(
        private _snackBar: MatSnackBar,
        private email: MailService,
        private router: Router,
        private apiSetings: SettingsServices,
        private api: CreditService,
        private formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) private data,
        public dialogNewCredit: MatDialogRef<NewCreditComponent>
    ) {
    }

    ngOnInit() {
        // console.table(this.data);
        this.frmNewCredit = this.formBuilder.group({
            vlrNewCredit: [null, Validators.required],
            formOfPayment: [null, Validators.required],
        });

        this.getSettings();
    }

    // Submit do formulário
    submit(formulario) {
        if (!isNullOrUndefined(formulario.value.formOfPayment) &&
            !isNullOrUndefined(formulario.value.vlrNewCredit)) {
            Swal.fire({
                title: 'Você deseja confirmar a recarga?',
                text: `Após a confirmação os créditos serão inseridos diretamente na conta da empresa.`,
                type: 'question',
                showCancelButton: true,
                confirmButtonColor: '#D5652B',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim',
                cancelButtonText: 'Não'
            }).then((confirmacao) => {
                if (confirmacao.value) {

                    // Bills
                    this.credits.customer_id = this.data.vindiId;
                    this.credits.payment_method_code = formulario.value.formOfPayment;

                    // Bill itens
                    this.billsitems.product_id = this.settings.id_product_mototaxi;
                    this.billsitems.amount = formulario.value.vlrNewCredit;
                    this.credits.bill_items.push(this.billsitems);

                    // Profile payment
                    this.paymentprofile.id = null;
                    this.credits.payment_profile = this.paymentprofile;

                    // Enviar para o servidor da vindi essa cpbrança
                    this.api.POST(this.credits).subscribe(
                        response => {
                            const retorno = JSON.parse(JSON.stringify(response));
                            const tipo = retorno.charges[0].payment_method.code;

                            if (tipo === 'bank_slip') {
                                Swal.fire({
                                    title: 'Recarga realizada. O valor do boleto é: ',
                                    imageUrl: '../../../assets/money.svg',
                                    text: 'R$: ' + retorno.amount,
                                    showCloseButton: true,
                                    imageWidth: 200,
                                    imageHeight: 100,
                                    confirmButtonColor: '#D5652B',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Imprimir boleto',
                                    cancelButtonText: 'Não'
                                }).then((result) => {
                                    if (result.value) {
                                        // Abre uma nova guia com o link do boleto
                                        const url = retorno.charges[0].print_url;
                                        if (!isNullOrUndefined(url)) {
                                            this.router.navigate([]).then(saida => {
                                                // window.location.href = url;
                                                window.open(url, '_blank');
                                            });
                                            this.dialogNewCredit.close();
                                        } else {
                                            Swal.fire({
                                                title: 'Não foi possível visualizar o boleto',
                                                text: 'Código de cobrança ' + retorno.id,
                                                type: 'warning',
                                                showCancelButton: false
                                            });
                                            this.dialogNewCredit.close();
                                        }
                                    }
                                });
                                const url = retorno.charges[0].print_url;
                                const barcode = retorno.charges[0].last_transaction.gateway_response_fields.typable_barcode;
                                const linkBill = `<a href='${url}' target='_blank'>visualizar</a>`;

                                // Envio de boleto
                                this.emailSend.to = this.data.email;
                                this.emailSend.subject = 'Nova Fatura gerada pelo MBoy';
                                this.emailSend.content = 'Pague seu boleto <b>MBoy</b> com o Codigo de barras <br/<b>' + barcode +
                                    '</b><br/>' + linkBill;
                                this.emailSend.multipart = false;
                                this.emailSend.html = false;
                                this.email.POST(this.emailSend).subscribe(
                                    data => {
                                        if (data) {
                                            this.openSnackBar('Email já enviado ao cliente', 'sucesso')
                                        }
                                    }
                                );

                            } else {
                                Swal.fire({
                                    title: 'Recarga realizada com sucesso no valor de: R$ ' + retorno.amount,
                                    text: 'Código da cobrança ' + retorno.id,
                                    type: 'warning',
                                    showCancelButton: false
                                });
                                this.dialogNewCredit.close();
                            }
                        }
                    );
                    this.credits = new CreditModel();
                    this.billsitems = new BillItems();
                    this.paymentprofile = new PaymentProfile();
                    formulario.value.formOfPayment = null;
                    formulario.value.vlrNewCredit = null;
                    this.dialogNewCredit.close();
                } else {
                    this.credits = new CreditModel();
                    this.billsitems = new BillItems();
                    this.paymentprofile = new PaymentProfile();
                    formulario.value.formOfPayment = null;
                    formulario.value.vlrNewCredit = null;
                    this.dialogNewCredit.close();
                }
            });
        }
    }

    getSettings() {
        this.apiSetings.GET().subscribe(
            data => {
                this.settings = data;
            }
        );
    }

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
