import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatButton} from '@angular/material';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {isNullOrUndefined} from '@swimlane/ngx-datatable/release/utils';
import {DomSanitizer} from '@angular/platform-browser';
import Swal from 'sweetalert2'
import {UserServices} from '../user-shared/user.services';
import {MatTabChangeEvent} from '@angular/material/tabs';
import {Config} from '../../../app-config';
import {GridOptions} from 'ag-grid-community';
import {IdiomaPTBR} from '../../../idioma-PTBR';

@Component({
    templateUrl: './user-form.html',
    providers: [UserServices]
})
export class UserDialogComponent implements OnInit {
    private readonly status: any;
    public registrationStatusList = [
        {value: 'UNDER_ANALYSIS', viewValue: 'UNDER_ANALYSIS'},
        {value: 'APPROVED', viewValue: 'APPROVED'},
        {value: 'BLOCKED', viewValue: 'BLOCKED'},
        {value: 'ACCESS_DENIED', viewValue: 'ACCESS_DENIED'},
        {value: 'REJECTED', viewValue: 'REJECTED'}
    ];

    public selectedStatus: any;
    public username: any;
    public formulario: FormGroup;
    public columnDefs: any;
    public gridOptions: GridOptions;
    public language = new IdiomaPTBR().language;
    public rowData: any;
    private url = new Config().getEndpoint();

    constructor(
        public api: UserServices,
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<UserDialogComponent>,
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

        this.gridOptions = <GridOptions>{
            onGridReady: () => {
                this.gridOptions.api.sizeColumnsToFit();
            },
            rowHeight: 500,
            frameworkComponents: {
                button: MatButton
            }
        };
    }

    ngOnInit() {
        this.formulario = this.formBuilder.group({
            username: new FormControl({
                value: this.data.username ? this.data.username : '',
                disabled: this.status !== 'Novo'
            }, Validators.required),
            email: this.data.email ? this.data.email : '',
            password: this.data.password ? this.data.password : '',
            name: this.data.name ? this.data.name : '',
            registrationStatus: new FormControl({
                value: this.data.registrationStatus ? this.data.registrationStatus : '',
                disabled: this.status === 'Novo'
            }),
            userType: 'BACKOFFICE',
            userTypeMboy: 'ADMIN',
        });
        this.selectedStatus = this.data.registrationStatus;
    }

    submit(form) {
        if (form.status !== 'VALID') {
            return;
        }
        const endpoint = new Config().getEndpoint();
        console.log('submit');

        if (this.status === 'Novo') {
            delete form.value['registrationStatus'];
            // console.log('Editando: ', form.value)
            this.api.client_http.post(`${endpoint}user-registration`, form.getRawValue())
                .subscribe(data => {
                        console.log('Objeto inserido!', data);
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
                                console.log('Objeto atualizado!', data);
                                this.dialogRef.close(`${form.value.descricao}`);
                            }
                        );
                }
            });
        } else {
            console.log('Deu ruim: ' + this.status);
        }
    }
}
