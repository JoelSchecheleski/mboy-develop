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

import {TablekmDialogComponent} from './tablekm-form/tablekm-dialog.component';
import {TablekmServices} from './tablekm-shared/tablekm.services';
import Swal from 'sweetalert2';

@Component({
    selector: 'ms-table-kilometer',
    templateUrl: './tablekm.component.html',
    styleUrls: ['./tablekm.component.scss'],
    providers: [TablekmServices]
})
export class TablekmComponent implements OnInit {
    public gridOptions: GridOptions;
    public rowData: any;
    public rowSetting: any;
    public columnDefs: any;
    public defaultColDef: any;
    public language = new IdiomaPTBR().language;
    private gridApi;
    private gridColumnApi;
    private url = new Config().getEndpoint();

    fileNameDialogRef: MatDialogRef<TablekmDialogComponent>;

    constructor(public _http: HttpClient,
                public api: TablekmServices,
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
            {headerName: 'Nome', field: 'description'},
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
            this.fileNameDialogRef = this.dialog.open(TablekmDialogComponent, {
                height: '650px',
                width: '1200px',
                data: this.api.userData(file)
            });
        } else { // Novo
            this.fileNameDialogRef = this.dialog.open(TablekmDialogComponent, {
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
            const actionType = e.event.target.getAttribute('data-action-type');
            switch (actionType) {
                case 'editar':
                    this.openFileDialog(JSON.parse(JSON.stringify(e.data)));
                    break;

                case 'deletar':
                    const id = e.data.id;
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
                            this.api.client_http.delete(`${this.url}settings/kilometers/${id}`)
                                .subscribe(data => {
                                        Swal.fire({
                                            position: 'center',
                                            type: 'success',
                                            title: 'Registro deletado com sucesso',
                                            showConfirmButton: false,
                                            animation: true,
                                            timer: 2500
                                        });
                                        this.ngOnInit();
                                    }, error => {
                                        Swal.fire({
                                            position: 'center',
                                            type: 'error',
                                            title: 'Não foi possível deletar esse registro.',
                                            showConfirmButton: false,
                                            animation: false,
                                            timer: 1500
                                        });
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
        const endpoint = new Config().getEndpoint();
        this._http.get(`${endpoint}settings/kilometers/0`)
            .subscribe(
                data => { // @ts-ignore
                    this.rowSetting = data;
                    this.rowData = data;
                }
            );
    }
}
