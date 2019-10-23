import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {isNullOrUndefined} from '@swimlane/ngx-datatable/release/utils';
import {DomSanitizer} from '@angular/platform-browser';
import {TablekmServices} from '../tablekm-shared/tablekm.services';
import {IdiomaPTBR} from '../../../idioma-PTBR';
import {TableRangeModel} from '../tablekm-shared/tablekmModel';
import {Config} from '../../../app-config';
import {url} from 'ng2-validation/dist/url';

@Component({
    templateUrl: './tablekm-form.html',
    providers: [TablekmServices]
})
export class TablekmDialogComponent implements OnInit {
    private readonly status: any;
    public language = new IdiomaPTBR().language;
    public formulario: FormGroup;
    private readonly config: string;
    private url = new Config().getEndpoint();

    // public columnDefs: any;
    // public gridOptions: GridOptions;
    // public rowData: any;
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

        // this.columnDefs = [
        //     {headerName: 'xxx', field: 'description', resizable: true, autoHeight: true},
        //     {headerName: 'yyy', field: 'additionalValuePerKm', resizable: true, autoHeight: true},
        // ];

        // this.gridOptions = <GridOptions>{
        //     onGridReady: () => {
        //         this.gridOptions.api.sizeColumnsToFit();
        //     },
        //     frameworkComponents: {
        //         button: MatButton
        //     }
        // };
    }

    ngOnInit() {
        this.formulario = this.formBuilder.group({
            id: this.data.id,
            description: this.data.description,
            additionalValuePerKm: this.data.additionalValuePerKm,
            // username: new FormControl({value: this.data.username ? this.data.username : '', disabled: this.status !== 'Novo'}),
            // cpfCnpj: new FormControl({value: this.data.cpfCnpj ? this.data.cpfCnpj : '', disabled: this.status !== 'Novo'}),
            // registrationStatus: new FormControl({
            //     value: this.data.registrationStatus ? this.data.registrationStatus : '',
            //     disabled: this.status === 'Novo'
            // }),
            // userType: 'APP',
            // userTypeMboy: 'CUSTOMER',
        });

        this.itensAdicionados = this.data.listRangeSettings;
    }

    // tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    //     if (tabChangeEvent.index === 1) { //corridas
    //         this.api.client_http.get(`${this.url}user/rides?username=${this.data.username}`)
    //             .subscribe(
    //                 data => { // @ts-ignore
    //                     this.rowDataRide = data;
    //                 },
    //                 err => console.error(err)
    //             );
    //     }
    // }

    submit(form) {
        if (form.status !== 'VALID') {
            return;
        }
        const objeto = (JSON.parse(JSON.stringify(form.value)));
        objeto.listRangeSettings = this.itensAdicionados.filter(obj => obj.value > 0);
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
            window.alert(error[0]);
            return;
        }

        console.log(objeto);
        console.log('submit');

        if (this.status/* === 'Novo'*/) {
            delete form.value['registrationStatus'];
            // console.log('Editando: ', form.value)
            this.api.client_http.post(`${this.url}settings/kilometers`, objeto)
                .subscribe(data => {
                        // console.log('Objeto inserido!', data);
                        this.dialogRef.close(`${form.value.descricao}`);
                    }
                );
            // } else if (this.status === 'Editando') {
            //     Swal.fire({
            //         title: 'Deseja realmente atualizar?',
            //         text: '',
            //         type: 'warning',
            //         showCancelButton: true,
            //         confirmButtonColor: '#038f9e',
            //         cancelButtonColor: '#d33',
            //         confirmButtonText: 'Salvar',
            //         cancelButtonText: 'Cancelar'
            //     }).then((result) => {
            //         if (result.value) {
            //             this.api.PUT(form.getRawValue(), form.value.username)
            //                 .subscribe(data => {
            //                         console.log('Objeto atualizado!', data);
            //                         this.dialogRef.close(`${form.value.descricao}`);
            //                     }
            //                 );
            //         }
            //     });
        } else {
            console.log('Deu ruim: ' + this.status);
        }
    }

    deleteItem(i: number) {
        this.itensAdicionados.splice(i, 1);
    }

    addNewRow() {
        this.itensAdicionados.push({id: null, kmInitial: 0, kmFinal: 0, value: 0});
    }

    updateRow(index, column, event) {
        this.itensAdicionados[index][column] = Number(event.srcElement.value);
    }
}
