import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormGroup, FormBuilder} from '@angular/forms';
import {isNullOrUndefined} from '@swimlane/ngx-datatable/release/utils';

import Swal from 'sweetalert2'
import {ReligiaoServices} from '../../../modules/servicos/religiao.services';
import {CorServices} from '../../../modules/servicos/cor.services';
import {NacionalServices} from '../../../modules/servicos/nacional.services';
import {EstadocivilServices} from '../../../modules/servicos/estadocivil.services';
import {CidadeServices} from '../cidades-shared/cidade.services';
import {StateServices} from '../cidades-shared/state.services';
import {StateModel} from '../../../modules/modelos/stateModel';

@Component({
    templateUrl: './cidade-form.html',
    providers: [CidadeServices, StateServices]
})
export class CidadesDialogComponent implements OnInit {
    private status: any;

    public today = new Date();
    public selectedState: any;
    // public state = new StateModel();
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
        // Busca todos os tipos de estado civil cadastrado
        this.stateService.GET().subscribe(data => {
            this.estados = data;
            // console.log(this.state);
        });

        // Formulário de cadastro de pacientes
        this.formulario = this.formBuilder.group({
            id: this.data.id ? this.data.id : '',
            state_id: this.data.state.id ? this.data.state.id : 0,
            name: this.data.name ? this.data.name : '',
            authorized: this.data.authorized ? this.data.authorized : '',
            ibgeCode: this.data.ibgeCode ? this.data.ibgeCode : '',
            zipCodes: this.data.zipCodes ? this.data.zipCodes : '',
            state: this.data.state ? this.data.state : '',
        });
        this.selectedState = this.data.state.abbreviation;
    }

    public compareObjects(o1: any, o2: any): boolean {
        return o1.name === o2.name && o1.id === o2.id;
    }

    public compareItems(i1, i2) {
        return i1 && i2 && i1.id === i2.id;
    }


    submit(form) {
        if (this.status === 'Novo') {
            // console.log('Editando: ', form.value)
            this.api.POST(form.value)
                .subscribe(data => {
                        console.log('Objeto inserido!', data);
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
                confirmButtonColor: '#038f9e',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Salvar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.value) {
                    this.api.PUT(form.value)
                        .subscribe(data => {
                                console.log('Objeto atualizado!', data);
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
