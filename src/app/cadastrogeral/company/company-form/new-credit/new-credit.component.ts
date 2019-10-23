import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {NgForm, FormGroup, FormControl, FormBuilder, Validator, Validators, FormArray, NgSelectOption} from '@angular/forms';
import {isNullOrUndefined} from '@swimlane/ngx-datatable/release/utils';
import {CreditService} from '../../../../service/credits/creditService';
import {CreditModel} from '../../../../modules/modelos/creditModel';
import {BillItems} from '../../../../modules/modelos/billItems';
import {PaymentProfile} from '../../../../modules/modelos/paymentProfile';
import {Config} from '../../../../app-config';
import {SettingsServices} from '../../../../service/Settings/SettingsServices';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
    selector: 'ms-new-credit',
    templateUrl: './new-credit.component.html',
    styleUrls: ['./new-credit.component.scss'],
    providers: [CreditService, SettingsServices]
})
export class NewCreditComponent implements OnInit {
    private _baseUrl = new Config().getEndpoint();
    public frmNewCredit: FormGroup;
    public credits = new CreditModel();
    public billsitems = new BillItems();
    public paymentprofile = new PaymentProfile();
    public settings: any;

    public methodPayment = [
        {value: 'credit_card', viewValue: 'Cartão de crédito'},
        {value: 'bank_slip', viewValue: 'Boleto'}
    ]
    selectedPayment: any;

    constructor(
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
        if (!isNullOrUndefined(formulario.value.formOfPayment) || !isNullOrUndefined(formulario.value.vlrNewCredit)) {
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

            console.log(JSON.stringify(this.credits));

            // Enviar para o servidor da vindi essa cpbrança
            this.api.POST(this.credits).subscribe(
                response => {
                    console.log(response);
                    const retorno = JSON.parse(JSON.stringify(response));
                    console.log(retorno)

                    if (response) {
                        Swal.fire({
                            title: 'Deseja visualizar o boleto agora?',
                            text: '',
                            type: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#038f9e',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Sim',
                            cancelButtonText: 'Não'
                        }).then((result) => {
                            if (result.value) {
                                // Abre uma nova guia com o link do boleto
                              const url = retorno.charges[0].print_url;
                              if (!isNullOrUndefined(url)) {
                                window.location.href = url;
                              } else {
                                window.location.href = 'http://www.cnn.com/';
                              }
                                // this.router.navigate(['/']).then(saida => {
                                //     window.location.href = 'http://www.cnn.com/';
                                // });
                            }
                        });
                    }

                }
            );
            this.credits = new CreditModel(); // Limpa o objeto após salvar
            this.billsitems = new BillItems();
            this.paymentprofile = new PaymentProfile();
        } else {
            console.log('Formulário inválido!');
        }
    }

    getSettings() {
        this.apiSetings.GET().subscribe(
            data => {
                this.settings = data;
                console.log(data);
            }
        );
    }
}
