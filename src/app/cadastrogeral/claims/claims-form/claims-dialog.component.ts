import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {isNullOrUndefined} from '@swimlane/ngx-datatable/release/utils';

import Swal from 'sweetalert2'
import {MatOptionSelectionChange} from '@angular/material/core';
import {ClaimsServices} from '../claims-shared/claims.services';
import {StateServices} from '../../cidades/cidades-shared/state.services';
import {CidadeServices} from '../../cidades/cidades-shared/cidade.services';
import {Config} from '../../../app-config';
import {HttpClient} from '@angular/common/http';
import {ClaimsComponent} from '../claims.component';

@Component({
    templateUrl: './claims-form.html',
    providers: [ClaimsServices]
})
export class ClaimsDialogComponent implements OnInit {
    private status: any;
    public selectedClaim = '';
    public claims: any;
    public frmSugestao: FormGroup;

    public statusClaim = [
        {value: 'FINISHED', viewValue: 'Finalizar'},
        {value: 'PENDING', viewValue: 'Reabrir'}
    ]
    selectedstatusClaim: any;

    @Output() onAdd = new EventEmitter<any>(true);

    constructor(
        public _http: HttpClient,
        public api: ClaimsServices,
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<ClaimsDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
    ) {
        if (!isNullOrUndefined(data.status) && data.status !== '') {
            this.status = 'Editando';
        }
    }

    ngOnInit() {
        this.frmSugestao = this.formBuilder.group({
            chatType: this.data.chatType ? this.data.chatType : '',
            subject: this.data.subject ? this.data.subject : '',
            message: this.data.message ? this.data.message : '',
            messages: this.data.messages ? this.data.messages : '',
            createdby: this.data.createdby ? this.data.createdby : '',
            id: this.data.id ? this.data.id : '',
            status: this.data.status ? this.data.status : '',
            createdAt: this.data.createdAt ? this.data.createdAt : '',
            serviceLog: this.data.serviceLog ? this.data.serviceLog : '',
            email: this.data.email ? this.data.email : '',
            userType: this.data.userType ? this.data.userType : '',
            idDaCorrida: this.data.idDaCorrida ? this.data.idDaCorrida : '',
        });
    }


    public onUpdateStatus(dados) {
        // this.frmSugestao.value.status = dados.value;
        this.data.status = this.selectedstatusClaim;

        const endpoint = new Config().getEndpoint();
        this._http.put(`${endpoint}chat/update-chat/${this.data.id}`, JSON.stringify(this.data))
            .subscribe(data => {
                // console.table(data);
                if (data) {
                    Swal.fire({
                        position: 'center',
                        type: 'success',
                        title: 'Registro salvo',
                        showConfirmButton: false,
                        animation: true,
                        timer: 2500
                    });
                    this.onAdd.emit('fechado');
                    this.dialogRef.close();
                } else {
                    Swal.fire({
                        position: 'center',
                        type: 'error',
                        title: 'Erro ao alterar esse registro, tente novamente!',
                        showConfirmButton: false,
                        animation: true,
                        timer: 2500
                    });
                }
            });

    }
}
