import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {isNullOrUndefined} from '@swimlane/ngx-datatable/release/utils';
import {DomSanitizer} from '@angular/platform-browser';
import {TablehrServices} from '../tablehr-shared/tablehr.services';
import {IdiomaPTBR} from '../../../idioma-PTBR';
import {TableRangeModel} from '../tablehr-shared/tablehrModel';
import {Config} from '../../../app-config';
import Swal from 'sweetalert2';

@Component({
    templateUrl: './tablehr-form.html',
    providers: [TablehrServices]
})
export class TablehrDialogComponent implements OnInit {
    private readonly status: any;
    public language = new IdiomaPTBR().language;
    public formulario: FormGroup;
    private readonly config: string;
    private url = new Config().getEndpoint();
    public itensAdicionados: [TableRangeModel];

    constructor(
        public api: TablehrServices,
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<TablehrDialogComponent>,
        private domSanitizer: DomSanitizer,
        @Inject(MAT_DIALOG_DATA) private data
    ) {
        if (!isNullOrUndefined(data.description) && data.description !== '') {
            this.status = 'Editando';
            this.config = data.description;
        } else {
            this.status = 'Novo';
            this.config = 'Nova configuração!';
        }
    }

    ngOnInit() {
        this.formulario = this.formBuilder.group({
            id: this.data.id,
            description: this.data.description
        });

        this.itensAdicionados = this.data.listRangeSettings;
    }

    submit(form) {
        if (form.status !== 'VALID') {
            return;
        }

        const objeto = (JSON.parse(JSON.stringify(form.value)));
        objeto.listRangeSettings = this.itensAdicionados;
        const error = [];

        function validaIntervalos(value: TableRangeModel) {
            // tslint:disable-next-line:forin
            for (const intervalo in objeto.listRangeSettings) {

                if (value.id === objeto.listRangeSettings[intervalo]['id']) {
                    return;
                }

                if ((value.hourInitial >= value.hourFinal) //se inicial maior ou igual a final
                    || (value.hourInitial >= objeto.listRangeSettings[intervalo]['hourInitial']
                        && value.hourFinal <= objeto.listRangeSettings[intervalo]['hourFinal']) //interno
                    || (value.hourInitial <= objeto.listRangeSettings[intervalo]['hourInitial']
                        && value.hourFinal >= objeto.listRangeSettings[intervalo]['hourFinal']) //externo
                    || (value.hourInitial >= objeto.listRangeSettings[intervalo]['hourInitial']
                        && value.hourInitial <= objeto.listRangeSettings[intervalo]['hourFinal']) //inicio dentro de outra faixa
                    || (value.hourFinal >= objeto.listRangeSettings[intervalo]['hourInitial']
                        && value.hourFinal <= objeto.listRangeSettings[intervalo]['hourFinal']) //fim dentro de outra faica
                ) {
                    error.push('Favor verificar os conflitos de horários!');
                    break;
                }
            }
        }

        objeto.listRangeSettings.forEach(validaIntervalos);

        if (error.length > 0) {
            Swal.fire({
                title: error[0],
                text: '',
                type: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#038f9e',
                confirmButtonText: 'Ok',
            })
        } else {

            this.api.client_http.post(`${this.url}settings/hour`, objeto)
                .subscribe(data => {
                        this.dialogRef.close(`${form.value.descricao}`);
                    }
                );
        }
    }

    deleteRow(i: number) {
        this.itensAdicionados.splice(i, 1);
    }

    addNewRow() {
        this.itensAdicionados.push({id: null, hourInitial: 0, hourFinal: 0, value: 0});
    }

    updateRow(index, column, event) {
        if (column !== 'value') {
            this.itensAdicionados[index][column] = event.srcElement.value;
        } else {
            this.itensAdicionados[index][column] = Number(event.srcElement.value);
        }

    }
}
