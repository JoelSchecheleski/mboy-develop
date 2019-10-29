import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatButton} from '@angular/material';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {isNullOrUndefined} from '@swimlane/ngx-datatable/release/utils';
import {DomSanitizer} from '@angular/platform-browser';
import Swal from 'sweetalert2'
import {CustomerServices} from '../customer-shared/customer.services';
import {MatTabChangeEvent} from '@angular/material/tabs';
import {Config} from '../../../app-config';
import {GridOptions} from 'ag-grid-community';
import {IdiomaPTBR} from '../../../idioma-PTBR';
import * as moment from 'moment';

@Component({
    templateUrl: './customer-form.html',
    providers: [CustomerServices]
})
export class CustomerDialogComponent implements OnInit {
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
        public api: CustomerServices,
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<CustomerDialogComponent>,
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
                headerName: 'Data', field: 'created_at', cellRenderer: (data) => {
                    return moment(data.value).format('DD/MM/YYYY HH:mm');
                }
            },
            {headerName: 'Origem', field: 'start_position'},
            {headerName: 'Destino', field: 'end_position'},
            {headerName: 'Participante', field: 'customer'},
            {headerName: 'Tipo de corrida', field: 'service_type'},
            {headerName: 'Forma de pagamento', field: 'payment_type'},
            {headerName: 'Valor', field: 'price'}
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
        this.formulario = this.formBuilder.group({
            name: new FormControl({ value: this.data.name ? this.data.name : '', disabled: this.status !== 'Novo' }),
            email: new FormControl({ value: this.data.email ? this.data.email : '', disabled: this.status !== 'Novo' }),
            username: new FormControl({ value: this.data.username ? this.data.username : '', disabled: this.status !== 'Novo' }),
            cpfCnpj: new FormControl({ value: this.data.cpfCnpj ? this.data.cpfCnpj : '', disabled: this.status !== 'Novo' }),
            registrationStatus: new FormControl({
                value: this.data.registrationStatus ? this.data.registrationStatus : '',
                disabled: this.status === 'Novo'
            }),
            userType: 'APP',
            userTypeMboy: 'CUSTOMER',
        });
        this.selectedStatus = this.data.registrationStatus;
    }

    tabChanged(tabChangeEvent: MatTabChangeEvent): void {
       if (tabChangeEvent.index === 1) { //corridas
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
            delete form.value['registrationStatus'];
            this.api.client_http.post(`${endpoint}user-registration`, form.getRawValue())
                .subscribe(data => {
                        this.dialogRef.close(`${form.value.descricao}`);
                    }
                );
        } else if (this.status === 'Editando') {
            Swal.fire({
                title: 'Deseja realmente atualizar?',
                text: '',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#038f9e',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Salvar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.value) {
                    this.api.PUT(form.getRawValue(), form.value.username)
                        .subscribe(data => {
                                this.dialogRef.close(`${form.value.descricao}`);
                            }
                        );
                }
            });
        } else {
        }
    }
}
