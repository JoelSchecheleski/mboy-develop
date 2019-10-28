import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {PageTitleService} from '../../core/page-title/page-title.service';
import {GridOptions} from 'ag-grid-community';
import 'ag-grid-community';
import {IdiomaPTBR} from '../../idioma-PTBR';
import {MatButton, MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {filter} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Config} from '../../app-config';

import {SettingsDialogComponent} from './settings-form/settings-dialog.component';
import {SettingsServices} from './settings-shared/settings.services';
import Swal from 'sweetalert2';

@Component({
    selector: 'ms-table-kilometer',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    providers: [SettingsServices]
})
export class SettingsComponent implements OnInit {
    public gridOptions: GridOptions;
    public rowData: any;
    public rowSetting: any;
    public columnDefs: any;
    public defaultColDef: any;
    public language = new IdiomaPTBR().language;
    private gridApi;
    private gridColumnApi;
    private url = new Config().getEndpoint();

    fileNameDialogRef: MatDialogRef<SettingsDialogComponent>;

    constructor(public _http: HttpClient,
                public api: SettingsServices,
                private translate: TranslateService,
                private pageTitleService: PageTitleService,
                private dialog: MatDialog,
                private snackBar: MatSnackBar) {

        this.pageTitleService.setTitle('Configuração');

        this.gridOptions = <GridOptions>{
            onGridReady: () => {
                this.gridOptions.api.sizeColumnsToFit();
            },
            rowHeight: 48,
            frameworkComponents: {
                button: MatButton
            }
        };

        this.columnDefs = [
            {headerName: 'Id', field: 'id', hide: true},
            {headerName: 'Valor minimo', field: 'minimumValueBankSlip'},
            {headerName: 'Configuracao de quilometragem', field: 'settingPerKmName'},
            {headerName: 'Configuracao de horário', field: 'settingPerHourName'},
            {
                headerName: 'Ativo', field: 'active',
                cellRenderer: function (params) {
                    const checked = params.data.active ? 'checked' : '';
                    const input = `<input type="checkbox"  ${checked} disabled >`;
                    return input;
                }
            },
            {
                headerName: 'Ação',
                lockPosition: false,
                cellClass: 'locked-col',
                suppressNavigable: true,
                cellRenderer: function () {
                    const display = 'block';
                    const html = `<button class='btn-edit' data-action-type='editar'><i class='icofont icofont-ui-edit'></i>Editar</button>
                     <button class='btn-delete' data-action-type='deletar'><i class='icofont icofont-ui-delete'></i>Deletar</button>`;
                    return html;
                }
            }
        ];

    }

    ngOnInit() {
        this.getAllSettings()
    }

    /**
     * Abre o dialog com o registro a ser atualizado / novo
     * @param file
     */
    openFileDialog(file?) {
        if (file) { // Editando
            this.fileNameDialogRef = this.dialog.open(SettingsDialogComponent, {
                height: '650px',
                width: '1200px',
                data: this.api.userData(file)
            });
        } else { // Novo
            this.fileNameDialogRef = this.dialog.open(SettingsDialogComponent, {
                height: '650px',
                width: '1200px',
                data: this.api.userData(file)
            });
        }

        this.fileNameDialogRef.afterClosed().pipe(
            filter(descricao => descricao)
        ).subscribe(descricao => {
            if (this.rowSetting) {
                const index = this.rowSetting.findIndex(f => f.descricao === file);
                if (index !== -1) {
                    this.rowSetting[index] = {descricao, content: file};
                } else {
                    this.rowSetting.push({descricao, content: ''});
                }
            }
            this.ngOnInit();
        });
    }

    /**
     * Executa uma função com base no que foi clicado
     * @param e
     */
    public onRowClicked(e) {
        if (e.event.target !== undefined) {
            const id = e.data.id;
            const actionType = e.event.target.getAttribute('data-action-type');
            switch (actionType) {
                case 'editar':
                    this.api.client_http.get(`${this.url}settings/config/${id}`)
                        .subscribe(data => {
                            this.openFileDialog(data[0]);
                        }, err => {
                            console.log(err);
                        });
                    break;

                case 'deletar':
                    console.log('DELETAR O ITEM: ', id);
                    Swal.fire({
                        title: 'Deseja realmente deletar esse registro?',
                        text: '',
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#D5652B',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Deletar',
                        cancelButtonText: 'Cancelar'
                    }).then((result) => {
                        if (result.value) {
                            this.api.client_http.delete(`${this.url}settings/config/${id}`)
                                .subscribe(data => {
                                        this.snackBar.open('Registro deletado com sucesso', '', {
                                            duration: 2000,
                                        });
                                        this.ngOnInit();
                                    }
                                );
                        }
                    });
                    break;
            }
        }
    }

    /**
     * Filtra um registro pelo campo disposto
     * @param event Evento a ser executado
     * @return dinamic {sentido somente no componente}
     */
    onQuickFilterChanged(event) {
        const val = event.target.value.toLowerCase();
        this.gridApi.setQuickFilter(val);
    }

    /**
     * Evento ao selecionar um registro
     */
    onSelectionChanged($event) {
        const selectedRows = this.gridApi.getSelectedRows();
        let selectedRowsString = '';
        selectedRows.forEach(function (rowSelection, index) {
            if (index !== 0) {
                selectedRowsString += ',';
            }
            selectedRowsString += rowSelection.descricao;
        });
    }

    public onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        params.api.sizeColumnsToFit();
    }

    public getAllSettings() {
        this._http.get(`${this.url}settings/config/0`)
            .subscribe(
                data => { // @ts-ignore
                    this.rowSetting = data;
                    this.rowData = data;
                },
                err => console.error(err)
            );
    }
}
