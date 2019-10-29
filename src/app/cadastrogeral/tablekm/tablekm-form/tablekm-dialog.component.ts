import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {isNullOrUndefined} from '@swimlane/ngx-datatable/release/utils';
import {DomSanitizer} from '@angular/platform-browser';
import {TablekmServices} from '../tablekm-shared/tablekm.services';
import {IdiomaPTBR} from '../../../idioma-PTBR';
import {TableRangeModel} from '../tablekm-shared/tablekmModel';
import {Config} from '../../../app-config';
import Swal from 'sweetalert2';

@Component({
    templateUrl: './tablekm-form.html',
    providers: [TablekmServices]
})
export class TablekmDialogComponent implements OnInit {
    private readonly status: any;
    public language = new IdiomaPTBR().language;
    public formulario: FormGroup;
    public readonly config: string;
    private url = new Config().getEndpoint();
    public itensAdicionados: any;

    constructor(
        public api: TablekmServices,
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<TablekmDialogComponent>,
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
            description: this.data.description,
            additionalValuePerKm: this.data.additionalValuePerKm,
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

                if ((value.kmInitial >= value.kmFinal) //se inicial maior ou igual a final
                    || (value.kmInitial >= objeto.listRangeSettings[intervalo]['kmInitial']
                        && value.kmFinal <= objeto.listRangeSettings[intervalo]['kmFinal']) //interno
                    || (value.kmInitial <= objeto.listRangeSettings[intervalo]['kmInitial']
                        && value.kmFinal >= objeto.listRangeSettings[intervalo]['kmFinal']) //externo
                    || (value.kmInitial >= objeto.listRangeSettings[intervalo]['kmInitial']
                        && value.kmInitial <= objeto.listRangeSettings[intervalo]['kmFinal']) //inicio dentro de outra faixa
                    || (value.kmFinal >= objeto.listRangeSettings[intervalo]['kmInitial']
                        && value.kmFinal <= objeto.listRangeSettings[intervalo]['kmFinal']) //fim dentro de outra faica
                ) {
                    error.push('Favor verificar os conflitos de alcance nas quilometragens!');
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

            delete form.value['registrationStatus'];
            this.api.client_http.post(`${this.url}settings/kilometers`, objeto)
                .subscribe(data => {
                        Swal.fire({
                            position: 'center',
                            type: 'success',
                            title: 'Registro adicionado com sucesso.',
                            showConfirmButton: false,
                            animation: true,
                            timer: 2500
                        });
                        this.dialogRef.close(`${form.value.descricao}`);
                    }, error1 => {
                        Swal.fire({
                            position: 'center',
                            type: 'success',
                            title: 'Erro ao adicionar registro! Tente novamente.',
                            showConfirmButton: false,
                            animation: true,
                            timer: 2500
                        });
                    }
                );
        }
    }

    deleteRow(i: number) {
        this.itensAdicionados.splice(i, 1);
    }

    addNewRow() {
        this.itensAdicionados.push({id: null, kmInitial: 0, kmFinal: 0, value: 0});
    }

    updateRow(index, column, event) {
        this.itensAdicionados[index][column] = Number(event.srcElement.value);
    }
}
