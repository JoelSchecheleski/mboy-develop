import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormGroup, FormBuilder} from '@angular/forms';
import {isNullOrUndefined} from '@swimlane/ngx-datatable/release/utils';
import {AntibiogramaServices} from '../antibiograma-shared/antibiograma.services';

import Swal from 'sweetalert2'

@Component({
    templateUrl: './antibiograma-form.html',
    providers: [AntibiogramaServices]
})
export class AntibiogramaDialogComponent implements OnInit {
    private status: any;
    public formulario: FormGroup;

    constructor(
        public api: AntibiogramaServices,
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<AntibiogramaDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data,
    ) {
        if (!isNullOrUndefined(data.descricao) && data.descricao !== '') {
            this.status = 'Editando';
        } else {
            this.status = 'Novo';
        }
    }

    ngOnInit() {
        this.formulario = this.formBuilder.group({
            id: this.data.id ? this.data.id : '',
            descricao: this.data.descricao ? this.data.descricao : ''
        })
    }

    submit(form) {
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
                    this.api.PUT(form.value)
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
}
