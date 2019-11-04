import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatButton} from '@angular/material';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {isNullOrUndefined} from '@swimlane/ngx-datatable/release/utils';
import {DomSanitizer} from '@angular/platform-browser';
import Swal from 'sweetalert2'
import {MotoboyServices} from '../motoboy-shared/motoboy.services';
import {MatTabChangeEvent} from '@angular/material/tabs';
import {Config} from '../../../app-config';
import {GridOptions} from 'ag-grid-community';
import {IdiomaPTBR} from '../../../idioma-PTBR';
import * as moment from 'moment';

@Component({
    templateUrl: './motoboy-form.html',
    providers: [MotoboyServices]
})
export class MotoboyDialogComponent implements OnInit {
    public vehicleDocument: any;
    public cnhDocument: any;

    private readonly status: any;
    public registrationStatusList = [
        {value: 'UNDER_ANALYSIS', viewValue: 'Sob Análise'},
        {value: 'APPROVED', viewValue: 'Aprovado'},
        {value: 'BLOCKED', viewValue: 'Bloqueado'},
        {value: 'ACCESS_DENIED', viewValue: 'Acesso negado'},
        {value: 'REJECTED', viewValue: 'Rejeitado'}
    ];
    public selectedStatus: any;
    public username: any;
    public formulario: FormGroup;
    public columnDefs: any;
    public columnRideDefs: any;
    public gridOptions: GridOptions;
    public language = new IdiomaPTBR().language;
    public rowData: any;
    public rowDataRide: any;
    private url = new Config().getEndpoint();

    constructor(
        public api: MotoboyServices,
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<MotoboyDialogComponent>,
        private domSanitizer: DomSanitizer,
        @Inject(MAT_DIALOG_DATA) private data
    ) {
        if (!isNullOrUndefined(data.username) && data.username !== '') {
            this.username = data.username;
            this.status = 'Editando';
        } else {
            this.username = 'Novo Usuário';
            this.status = 'Novo';
        }

        this.columnDefs = [
            {headerName: 'Tipo documento', field: 'type', resizable: true, autoHeight: true},
            {
                headerName: 'Foto',
                field: 'document',
                lockPosition: false,
                cellClass: 'locked-col',
                suppressNavigable: true,
                autoHeight: true,
                autoWidth: true,
                resizable: true,
                cellRenderer: function (row: any) {
                    return `<span data-action-type="showDocument" >Documento</span>`
                }
            }
        ];

        this.columnRideDefs = [
            {
                // tslint:disable-next-line:no-shadowed-variable
                headerName: 'Data', field: 'created_at', cellRenderer: (data) => {
                    return moment(data.value).format('DD/MM/YYYY HH:mm');
                }
            },
            {headerName: 'Origem', field: 'start_position'},
            {headerName: 'Destino', field: 'end_position'},
            {headerName: 'Participante', field: 'motoboy'},
            {
                headerName: 'Tipo de corrida', field: 'service_type',
                cellRenderer: function (params) {
                    return `${
                        params.value === 'DELIVERY' ? 'Entrega' :
                            params.value === 'MOTOTAXI' ? 'Mototaxi' :
                                params.value === '' ? 'Indefinido' : ''}`;
                }
            },
            {
                headerName: 'Forma de pagamento', field: 'payment_type',
                cellRenderer: function (params) {
                    return `${
                        params.value === 'MONEY' ? 'Dinheiro' :
                            params.value === 'CREDIT_CARD' ? 'Cartão de crédito' :
                                params.value === 'CREDIT' ? 'Crédito' :
                                    params.value === 'BANK_SLIP' ? 'Boleto' :
                                        params.value === '' ? 'Indefinido' : ''}`;
                }
            },
            {
                headerName: 'Valor', field: 'price', cellRenderer: function (params) {
                    return `${'R$ ' + params.value.toFixed(2)}`;
                }
            }
        ];

        this.gridOptions = <GridOptions>{
            onGridReady: () => {
                this.gridOptions.api.sizeColumnsToFit();
            },
            frameworkComponents: {
                button: MatButton
            }
        };
    }

    ngOnInit() {
        this.vehicleDocument = this.data.vehicleDocument;
        this.cnhDocument = this.data.cnhDocument;

        this.formulario = this.formBuilder.group({
            id: new FormControl({value: this.data.id ? this.data.id : '', disabled: this.status !== 'Novo'}),
            name: new FormControl({value: this.data.name ? this.data.name : '', disabled: this.status !== 'Novo'}),
            comercialName: new FormControl({
                value: this.data.comercialName ? this.data.comercialName : '',
                disabled: this.status !== 'Novo'
            }),
            email: new FormControl({value: this.data.email ? this.data.email : '', disabled: this.status !== 'Novo'}),
            cpfCnpj: new FormControl({value: this.data.cpfCnpj ? this.data.cpfCnpj : '', disabled: this.status !== 'Novo'}),
            username: new FormControl({value: this.data.username ? this.data.username : '', disabled: this.status !== 'Novo'}),
            street: new FormControl({value: this.data.street ? this.data.street : '', disabled: this.status !== 'Novo'}),
            houseNumber: new FormControl({value: this.data.houseNumber ? this.data.houseNumber : '', disabled: this.status !== 'Novo'}),
            complement: new FormControl({value: this.data.complement ? this.data.complement : '', disabled: this.status !== 'Novo'}),
            neighborhood: new FormControl({value: this.data.neighborhood ? this.data.neighborhood : '', disabled: this.status !== 'Novo'}),
            usercity: new FormControl({value: this.data.usercity ? this.data.usercity : '', disabled: this.status !== 'Novo'}),
            userstate: new FormControl({value: this.data.userstate ? this.data.userstate : '', disabled: this.status !== 'Novo'}),
            zipCode: new FormControl({value: this.data.zipCode ? this.data.zipCode : '', disabled: this.status !== 'Novo'}),
            accessoryType: new FormControl({
                value: this.data.accessoryType ? this.data.accessoryType : '',
                disabled: this.status !== 'Novo'
            }),
            registrationStatus: new FormControl({
                value: this.data.registrationStatus ? this.data.registrationStatus : '',
                disabled: this.status === 'Novo'
            }),
            userType: 'APP',
            userTypeMboy: 'MOTOBOY',
        });
        this.selectedStatus = this.data.registrationStatus;
    }

    /**
     * Visualiza o documento do veículo
     */
    visualizarVehicleDocument() {
        console.log('Abrir visualizador de documento veículo');
        Swal.fire({
            imageUrl: this.vehicleDocument,
            confirmButtonColor: '#D5652B',
            imageHeight: 400,
            imageWidth: 700,
            imageAlt: 'Documento do veículo'
        })
    }

    // Visualiza o documento CNH
    visualizarCnhDocument() {
        console.log('Abrir visualizador de documento cnh');
        Swal.fire({
            imageUrl: this.cnhDocument,
            confirmButtonColor: '#D5652B',
            imageHeight: 400,
            imageWidth: 700,
            imageAlt: 'Documento da CNH do motorista'
        })
    }

    tabChanged(tabChangeEvent: MatTabChangeEvent): void {
        if (tabChangeEvent.index === 1) { // corridas
            this.api.client_http.get(`${this.url}user/rides?username=${this.data.username}`)
                .subscribe(
                    data => { // @ts-ignore
                        this.rowDataRide = data;
                    }
                );
        }
    }

    submit(form) {
        if (form.status !== 'VALID') {
            return;
        }
        const endpoint = new Config().getEndpoint();

        if (this.status === 'Novo') {
            // delete form.value['registrationStatus'];
            this.api.client_http.post(`${endpoint}user-registration`, form.getRawValue())
                .subscribe(data => {
                        Swal.fire({
                            position: 'center',
                            title: 'Registro cadastrado sucesso.',
                            imageUrl: '../../assets/viagens_ok.svg',
                            showConfirmButton: false,
                            imageWidth: 150,
                            animation: false,
                            timer: 2500
                        });
                        this.dialogRef.close(`${form.value.email}`);
                    }, error => {
                        Swal.fire({
                            position: 'center',
                            title: 'Ops, algo deu errado.',
                            imageUrl: '../../assets/viagens_error.svg',
                            showConfirmButton: false,
                            imageWidth: 150,
                            animation: false,
                            timer: 2500
                        });
                    }
                );
        } else if (this.status === 'Editando') {
            Swal.fire({
                title: 'Deseja realmente atualizar?',
                text: '',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#D5652B',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Salvar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.value) {
                    this.api.PUT(form.getRawValue(), form.getRawValue().username)
                        .subscribe(data => {
                                Swal.fire({
                                    position: 'center',
                                    title: 'Registro alterado com sucesso.',
                                    imageUrl: '../../assets/viagens_ok.svg',
                                    showConfirmButton: false,
                                    imageWidth: 150,
                                    animation: false,
                                    timer: 2500
                                });
                                this.dialogRef.close(`${form.value.email}`);
                            }, error => {
                                Swal.fire({
                                    position: 'center',
                                    title: 'Ops, algo deu errado.',
                                    imageUrl: '../../assets/viagens_error.svg',
                                    showConfirmButton: false,
                                    imageWidth: 150,
                                    animation: false,
                                    timer: 2500
                                });
                            }
                        );
                }
            });
        } else {
        }
    }
}
