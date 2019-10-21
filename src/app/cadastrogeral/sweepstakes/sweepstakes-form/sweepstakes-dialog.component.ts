import {Component, OnInit, Inject} from '@angular/core';
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

@Component({
    templateUrl: './sweepstakes-form.html',
    providers: [SweepstakesServices]
})
export class SweepstakesDialogComponent implements OnInit {
    private status: any;

    public today = new Date();
    public selectedState = '';
    public estados: any;
    public formulario: FormGroup;

    constructor(
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
        // Busca todos os estados

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
        if (this.status === 'Novo') {
            this.api.POST(form.value)
                .subscribe(data => {
                        Swal.fire({
                            position: 'center',
                            // type: 'success',
                            title: 'Sorteio realizado',
                            imageUrl: '../../assets/sorteios.svg',
                            showConfirmButton: false,
                            imageWidth: 150,
                            animation: false,
                            timer: 1500
                        });
                        this.dialogRef.close(`${form.value.name}`);
                    }
                );
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
                                this.dialogRef.close(`${form.value.name}`);
                            }
                        );
                }
            });
        }
    }

    getErrorMessage() {
        return this.formulario['name'].hasError('required') ? 'Nome é obrigatório' : '';
    }

}
