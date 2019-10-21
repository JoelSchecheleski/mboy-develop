import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {isNullOrUndefined} from '@swimlane/ngx-datatable/release/utils';

import Swal from 'sweetalert2'
import {CidadeServices} from '../cidades-shared/cidade.services';
import {StateServices} from '../cidades-shared/state.services';
import {MatOptionSelectionChange} from '@angular/material/core';

@Component({
    templateUrl: './cidade-form.html',
    providers: [CidadeServices, StateServices]
})
export class CidadesDialogComponent implements OnInit {
    private status: any;
    public selectedState = '';
    public estados: any;
    public formulario: FormGroup;

    constructor(
        private stateService: StateServices,
        public api: CidadeServices,
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<CidadesDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data,
    ) {
        if (!isNullOrUndefined(data.name) && data.name !== '') {
            this.status = 'Editando';
        } else {
            this.status = 'Novo';
        }
    }

    ngOnInit() {
        this.stateService.GET().subscribe(data => {
            this.estados = data;
            if (this.data && this.data.state) {
                this.selectedState = this.estados.filter(obj => obj.abbreviation === this.data.state)[0].id
            }
        });


        this.formulario = this.formBuilder.group({
            id: this.data.id ? this.data.id : '',
            name: this.data.name ? this.data.name : '',
            authorized: this.data.authorized ? this.data.authorized : false,
            ibgeCode: this.data.ibgeCode ? this.data.ibgeCode : '',
            zipCodes: this.data.zipCodes ? this.data.zipCodes : '',
            state: this.data.state ? this.data.state : '',
        });
    }

    public selectState(event: MatOptionSelectionChange, state_id: number) {
        if (event.source.selected) {
            this.formulario.value['state_id'] = state_id;
            this.formulario.value['state'] = this.estados.filter(obj => obj.id === state_id)[0].abbreviation;
        }
    }

    submit(form) {
        if (this.status === 'Novo') {
            delete form.value['id'];
            delete form.value['state_id'];
            delete form.value['zipCodes'];

            this.api.POST(form.value)
                .subscribe(data => {
                        Swal.fire({
                            position: 'center',
                            // type: 'success',
                            title: 'Cidade adicionada',
                            imageUrl: '../../assets/cidade_add.svg',
                            showConfirmButton: false,
                            imageWidth: 150,
                            animation: false,
                            timer: 1500
                        });
                        this.dialogRef.close(`${form.value.name}`);
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
                    this.api.PUT(form.value)
                        .subscribe(data => {
                                Swal.fire({
                                    position: 'center',
                                    // type: 'success',
                                    title: 'Cidade atualizada',
                                    imageUrl: '../../assets/cidade_add.svg',
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
}
