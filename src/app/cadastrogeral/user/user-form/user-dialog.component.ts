import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormGroup, FormBuilder} from '@angular/forms';
import {isNullOrUndefined} from '@swimlane/ngx-datatable/release/utils';

import Swal from 'sweetalert2'
import {UserServices} from '../user-shared/user.services';

@Component({
    templateUrl: './user-form.html',
    providers: [UserServices]
})
export class UserDialogComponent implements OnInit {
    private status: any;

    public today = new Date();
    public registrationStatusList = [
        { value: 'UNDER_ANALYSIS', viewValue: 'UNDER_ANALYSIS' },
        { value: 'APPROVED', viewValue: 'APPROVED' },
        { value: 'BLOCKED', viewValue: 'BLOCKED' },
        { value: 'ACCESS_DENIED', viewValue: 'ACCESS_DENIED' },
        { value: 'REJECTED', viewValue: 'REJECTED' }
    ];

    public selectedStatus: any;

    public username: any;
    public formulario: FormGroup;

    constructor(
        public api: UserServices,
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<UserDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data,
    ) {
        if (!isNullOrUndefined(data.username) && data.username !== '') {
            this.username = data.username;
            this.status = 'Editando';
        } else {
            this.username = 'Novo Usuário';
            this.status = 'Novo';
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

    // public compareObjects(o1: any, o2: any): boolean {
    //     return o1.name === o2.name && o1.id === o2.id;
    // }
    //
    // public compareItems(i1, i2) {
    //     return i1 && i2 && i1.id === i2.id;
    // }


    submit(form) {
        console.log("submit");
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
                    this.api.POT(form.value, form.value.username)
                        .subscribe(data => {
                                console.log('Objeto atualizado!', data);
                                this.dialogRef.close(`${form.value.descricao}`);
                            }
                        );
                }
            });
        }
        // this.dialogRef.close(`${form.value.descricao}`);
    }

    // getErrorMessage() {
    //     return this.formulario['nome'].hasError('required') ? 'Nome é requerido' : '';
    // }

    // private idade(data) {
    //     const atualmente = new Date();
    //     const nascimento = new Date(data.split('/').reverse().join('/'));
    //
    //     let ano = atualmente.getFullYear() - nascimento.getFullYear();
    //     let mes: any;
    //     let dia: any;
    //
    //     if ((atualmente.getMonth() + 1) >= (nascimento.getMonth() + 1)) {
    //         mes = (atualmente.getMonth() + 1) - (nascimento.getMonth() + 1);
    //     } else {
    //         mes = 12 + (atualmente.getMonth() + 1) - (nascimento.getMonth() + 1);
    //         ano--;
    //     }
    //
    //     if (atualmente.getDate() >= nascimento.getDate()) {
    //         dia = atualmente.getDate() - nascimento.getDate();
    //     } else {
    //         dia = 31 + atualmente.getDate() - nascimento.getDate();
    //         mes--;
    //
    //         if (mes < 0) {
    //             mes = 11;
    //             ano--;
    //         }
    //     }
    //     return ((ano > 1) ? ano + ' Anos' : (ano === 1) ? ano + ' Ano' :
    //         (mes > 1) ? mes + ' Meses' : (mes === 1) ? mes + ' Mês' :
    //             (dia > 1) ? dia + ' Dias' : (dia === 1) ? dia + ' Dia' : 'Hoje');
    // }
}
