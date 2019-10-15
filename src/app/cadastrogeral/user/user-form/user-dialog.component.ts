import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatButton} from '@angular/material';
import {FormGroup, FormBuilder} from '@angular/forms';
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
    public rowHeight: 500;

    public defaultColDef: any;
    public columnDefs: any;
    public gridOptions: GridOptions;
    public language = new IdiomaPTBR().language;
    public rowData: any;

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

    public onRowClicked(e) {
        if (e.event.target !== undefined) {
            const actionType = e.event.target.getAttribute('data-action-type');
            switch (actionType) {
                case 'showDocument':
                    const image = new Image();
                    image.src = e.data.document;

                    setTimeout(function () {
                        const w = window.open('about:blank', 'image', 'width=350, height=255,left='
                            + (document.documentElement.clientWidth - 350) / 2
                            + ',top=' + (document.documentElement.clientHeight - 255) / 2
                        );

                        w.document.write(image.outerHTML);
                    }, 0);
                    break;
            }
        }
    }

    tabChanged(tabChangeEvent: MatTabChangeEvent): void {
        console.log('tabChangeEvent => ', tabChangeEvent);
        console.log('index => ', tabChangeEvent.index);

        if (tabChangeEvent.index === 1) {
            this.api.client_http.get('http://localhost:8080/api/document/47980808080')
                .subscribe(
                    data => { // @ts-ignore
                        this.rowData = data;
                    },
                    err => console.error(err)
                );
        }
    }

    ngOnInit() {

        this.formulario = this.formBuilder.group({
            username: this.data.username ? this.data.username : '',
            email: this.data.email ? this.data.email : '',
            password: this.data.password ? this.data.password : '',
            name: this.data.name ? this.data.name : '',
            cpfCnpj: this.data.cpfCnpj ? this.data.cpfCnpj : '',
            userType: this.data.userType ? this.data.userType : '',
            userTypeMboy: this.data.userTypeMboy ? this.data.userTypeMboy : '',
            active: this.data.active ? this.data.active : '',
            gender: this.data.gender ? this.data.gender : '',
            dateOfBirth: this.data.dateOfBirth ? this.data.dateOfBirth : '',
            avatar: this.data.avatar ? this.data.avatar : '',
            comercialName: this.data.comercialName ? this.data.comercialName : '',
            zipCode: this.data.zipCode ? this.data.zipCode : '',
            neighborhood: this.data.neighborhood ? this.data.neighborhood : '',
            street: this.data.street ? this.data.street : '',
            houseNumber: this.data.houseNumber ? this.data.houseNumber : '',
            complement: this.data.complement ? this.data.complement : '',
            accessoryType: this.data.accessoryType ? this.data.accessoryType : '',
            registrationStatus: this.data.registrationStatus ? this.data.registrationStatus : '',
            pendingRecharge: this.data.pendingRecharge ? this.data.pendingRecharge : '',
            motorcyclePlate: this.data.motorcyclePlate ? this.data.motorcyclePlate : '',
            cnh: this.data.cnh ? this.data.cnh : '',
            currentRank: this.data.currentRank ? this.data.currentRank : '',
            vindiId: this.data.vindiId ? this.data.vindiId : '',
            userstate: this.data.userstate ? this.data.userstate : '',
            usercity: this.data.usercity ? this.data.usercity : ''
        });
        this.selectedStatus = this.data.registrationStatus;
    }

    submit(form) {
        console.log('submit');
        if (this.status === 'Novo') {
            // console.log('Editando: ', form.value)
            this.api.POST(form.value)
                .subscribe(data => {
                        console.log('Objeto inserido!', data);
                        this.dialogRef.close(`${form.value.descricao}`);
                    }
                );
        }
        if (this.status === 'Editando') {
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
                    this.api.PUT(form.value, form.value.username)
                        .subscribe(data => {
                                console.log('Objeto atualizado!', data);
                                this.dialogRef.close(`${form.value.descricao}`);
                            }
                        );
                }
            });
        }
    }


}
