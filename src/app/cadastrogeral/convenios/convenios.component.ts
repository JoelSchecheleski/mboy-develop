import {Component, OnInit} from '@angular/core';
import {ConvenioServices} from './convenio-shared/convenio.services'
import {TranslateService} from '@ngx-translate/core';
import {PageTitleService} from '../../core/page-title/page-title.service';

import {GridOptions} from 'ag-grid-community';
import 'ag-grid-community';
import {IdiomaPTBR} from '../../idioma-PTBR';
import {isNullOrUndefined} from 'util';
import {MatButton, MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';

import {ConvenesDialogComponent} from './convenio-form/convenes-dialog.component';
import {filter} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
    selector: 'ms-convenio',
    templateUrl: './convenios.component.html',
    styleUrls: ['./convenios.component.scss'],
    providers: [ConvenioServices]
})
export class ConveniosComponent implements OnInit {
    public rowConvenio: any;
    public gridOptions: GridOptions;
    public rowData: any;
    public columnDefs: any;
    public rowSelection;
    public defaultColDef;
    public language = new IdiomaPTBR().language;
    private gridApi;
    private gridColumnApi;

    fileNameDialogRef: MatDialogRef<ConvenesDialogComponent>;

    constructor(public api: ConvenioServices,
                private translate: TranslateService,
                private pageTitleService: PageTitleService,
                private dialog: MatDialog,
                private snackBar: MatSnackBar) {
        this.pageTitleService.setTitle('Convenio');
        const params = {
            skipHeader: false,
            skipFooters: true,
            skipGroups: true,
            fileName: 'export.csv'
        };
        const files = [
            {descricao: 'Celesc.js', content: ''}
        ];

        // this.gridOptions = <GridOptions>{
        //   onGridReady: () => {
        //     this.gridOptions.api.sizeColumnsToFit();
        //     // this.gridOptions.api.exportDataAsCsv(params);
        //   }
        // };

        this.gridOptions = <GridOptions>{
            onGridReady: () => {
                this.gridOptions.api.sizeColumnsToFit();
            },
            rowHeight: 48, // recommended row height for material design data grids,
            frameworkComponents: {
                button: MatButton
            }
        };

        this.columnDefs = [
            {headerName: 'ID', field: 'id', rowDrag: true},
            {headerName: 'Nome', field: 'nome'},
            {
                headerName: 'Ação',
                lockPosition: false,
                cellClass: 'locked-col',
                suppressNavigable: true,
                cellRenderer: function () {
                    const display = 'block';
                    const html = `<button class='btn btn-danger btn-mini' color="primary" data-action-type='editar'>
                        <i class='icofont icofont-ui-edit'></i>Editar
                     </button>
                     <button class='btn btn-danger btn-mini' color="primary" data-action-type='deletar'>
                         <i class='icofont icofont-ui-delete'></i>Deletar
                     </button>`;
                    return html;
                }
            }
        ];

    }

    ngOnInit() {
        this.getAllAntibioticos()
    }

    /**
     * Abre o dialog com o registro a ser atualizado / novo
     * @param file
     */
    openFileDialog(file?) {
        if (file) { // Editando
            this.fileNameDialogRef = this.dialog.open(ConvenesDialogComponent, {
                height: '400px',
                width: '600px',
                // position: {
                //     'top': '15%',
                //     'left': '25%'
                // },
                data: {
                    id: file ? file.id : '',
                    descricao: file ? file.descricao : ''
                }
            });
        } else { // Novo
            this.fileNameDialogRef = this.dialog.open(ConvenesDialogComponent, {
                data: {
                    id: '',
                    descricao: ''
                }
            });
        }

        this.fileNameDialogRef.afterClosed().pipe(
            filter(descricao => descricao)
        ).subscribe(descricao => {
            if (this.rowConvenio) {
                const index = this.rowConvenio.findIndex(f => f.descricao === file);
                if (index !== -1) {
                    this.rowConvenio[index] = {descricao, content: file};
                } else {
                    this.rowConvenio.push({descricao, content: ''});
                }
            }
            this.ngOnInit();
        });
        // console.log(this.rowConvenio);
    }

    /**
     * Executa uma função com base no que foi clicado
     * @param e
     */
    public onRowClicked(e) {
        if (e.event.target !== undefined) {
            const id = e.data.id;
            const actionType = e.event.target.getAttribute('data-action-type');
            // console.log(actionType);
            switch (actionType) {
                case 'editar':
                    const selectedRows = this.gridApi.getSelectedRows();
                    let selectedRowsString = '';
                    selectedRows.forEach(function (rowSelection, index) {
                        if (index !== 0) {
                            selectedRowsString += ',';
                        }
                        selectedRowsString += rowSelection.descricao;
                    });
                    this.openFileDialog(selectedRows[0]);
                    break;
                case 'deletar':
                    console.log('DELETAR O ITEM: ', id);
                    Swal.fire({
                        title: 'Deseja realmente deletar esse registro?',
                        text: '',
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#038f9e',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Deletar',
                        cancelButtonText: 'Cancelar'
                    }).then((result) => {
                        if (result.value) {
                            this.api.DELETE(id)
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
    onSelectionChanged() {
        const selectedRows = this.gridApi.getSelectedRows();
        let selectedRowsString = '';
        selectedRows.forEach(function (rowSelection, index) {
            if (index !== 0) {
                selectedRowsString += ',';
            }
            selectedRowsString += rowSelection.descricao;
        });
        console.log(JSON.stringify(selectedRows[0]));
        // this.openFileDialog(selectedRows[0]);
    }

    public onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        params.api.sizeColumnsToFit();
    }

    /**
     * Busca todos os antibioticos
     * @return List of {objects<T>}
     */
    public getAllAntibioticos() {
        this.api.GET().subscribe(
            data => { // @ts-ignore
                this.rowConvenio = data;
                this.rowData = data;
            },
            err => console.error(err),
            () => console.log(this.rowConvenio)
        );
    }

}
