import {Component, OnInit, Inject, ViewChild} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormGroup, FormBuilder} from '@angular/forms';
import {isNullOrUndefined} from '@swimlane/ngx-datatable/release/utils';

import Swal from 'sweetalert2'
import {ReligiaoServices} from '../../../modules/servicos/religiao.services';
import {CorServices} from '../../../modules/servicos/cor.services';
import {NacionalServices} from '../../../modules/servicos/nacional.services';
import {EstadocivilServices} from '../../../modules/servicos/estadocivil.services';
import {SweepstakesServices} from '../sweepstakes-shared/sweepstakes-services';
import {SweepstakesModel} from '../sweepstakes-shared/SweepstakesModel';
import {MatOptionSelectionChange} from '@angular/material/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {isEmpty} from 'rxjs/operators';
import {Config} from '../../../app-config';
import {HttpClient} from '@angular/common/http';

@Component({
    templateUrl: './sweepstakes-form.html',
    providers: [SweepstakesServices]
})
export class SweepstakesDialogComponent implements OnInit {
    private status: any;
    public dayExpirationCredit: any;
    public today = new Date();
    public selectedState = '';
    public estados: any;
    public formulario: FormGroup;


    constructor(
        public _http: HttpClient,
        public api: SweepstakesServices,
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<SweepstakesDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data,
    ) {
        if (!isNullOrUndefined(data.name) && data.name !== '') {
            this.status = 'Editando';
        } else {
            this.status = 'Novo';
        }
    }

    ngOnInit() {
        // Busca as configurações da aplicação
        this.getSettings();

        // Sorteios realizados
        this.formulario = this.formBuilder.group({
            id: this.data.id ? this.data.id : '',
            cashPrize: this.data.cashPrize ? this.data.cashPrize : '',
            quantityWinners: this.data.quantityWinners ? this.data.quantityWinners : '',
            userCategory: this.data.userCategory ? this.data.userCategory : '',
            quantityServices: this.data.quantityServices ? this.data.quantityServices : '',
            quantityQualifiedUsers: this.data.quantityQualifiedUsers ? this.data.quantityQualifiedUsers : '',
            createdBy: this.data.createdBy ? this.data.createdBy : ''
        });
    }

    public compareObjects(o1: any, o2: any): boolean {
        return o1.name === o2.name && o1.id === o2.id;
    }

    public compareItems(i1, i2) {
        return i1 && i2 && i1.id === i2.id;
    }

    submit(form) {
        if (isNullOrUndefined(form.value.quantityWinners) || form.value.quantityWinners === '') {
//            this.dialogRef.close(`${form.value.cashPrize}`);
            this.status = null;
        }
        if (this.status === 'Novo') {
            form.value.userCategory = 'COMPANY';
            form.value.quantityQualifiedUsers = form.value.quantityWinners;
            form.value.createdBy = JSON.parse(localStorage.getItem('SESSAO')).username; // Busca o usuário
            this.api.POST(form.value)
                .subscribe(data => {
                        Swal.fire({
                            position: 'center',
                            // type: 'success',
                            title: 'Sorteio realizado',
                            imageUrl: '../../assets/sorteio_success.svg',
                            showConfirmButton: false,
                            imageWidth: 150,
                            animation: false,
                            timer: 2500
                        });
                        this.dialogRef.close(`${form.value.cashPrize}`);
                    }, error => {
                        Swal.fire({
                            position: 'center',
                            // type: 'success',
                            title: `Ocorreu um erro <br/> Tente novamente mais tarde.`,
                            imageUrl: '../../assets/sorteio_error.svg',
                            showConfirmButton: false,
                            imageWidth: 150,
                            animation: false,
                            timer: 2500
                        })
                    }
                );
            this.ngOnInit();
        }
        if (this.status === 'Editando') {
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
                    form.value.userCategory = 'COMPANY';
                    form.value.quantityQualifiedUsers = form.value.quantityWinners;
                    form.value.createdBy = JSON.parse(localStorage.getItem('SESSAO')).username; // Busca o usuário
                    this.api.PUT(form.value)
                        .subscribe(data => {
                                Swal.fire({
                                    position: 'center',
                                    // type: 'success',
                                    title: 'Cidade atualizada',
                                    imageUrl: '../../assets/sorteios.svg',
                                    showConfirmButton: false,
                                    imageWidth: 150,
                                    animation: false,
                                    timer: 1500
                                });
                                this.dialogRef.close(`${form.value.cashPrize}`);
                            }
                        );
                }
            });
            this.ngOnInit();
        }
    }

    getErrorMessage() {
        return this.formulario['name'].hasError('required') ? 'Nome é obrigatório' : '';
    }

    getSettings() {
        const endpoint = new Config().getEndpoint();
        this._http.get(`${endpoint}config/settings`)
            .subscribe(
                data => {
                    this.dayExpirationCredit = data['creditLimit'];
                }
            );
    }

}
