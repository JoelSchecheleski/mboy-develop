import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {PageTitleService} from '../../core/page-title/page-title.service';

import {GridOptions} from 'ag-grid-community';
import 'ag-grid-community';
import {IdiomaPTBR} from '../../idioma-PTBR';
import {isNullOrUndefined} from 'util';
import {MatButton, MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';

import {filter} from 'rxjs/operators';
import Swal from 'sweetalert2';

import {CidadeServices} from './cidades-shared/cidade.services';
import {HttpClient} from '@angular/common/http';
import {Config} from '../../app-config';
import {CidadesDialogComponent} from './cidades-form/cidade-dialog.component';

@Component({
    selector: 'ms-cidades',
    templateUrl: './cidades.component.html',
    styleUrls: ['./cidades.component.scss'],
    providers: [CidadeServices]
})

export class CidadesComponent implements OnInit {
    public rowCidadesReport: any;
    public rowDataReport: any;

    public rowCidades: any;
    public gridOptions: GridOptions;
    public rowData: any;
    public columnDefs: any;
    public rowSelection;
    public defaultColDef;
    public language = new IdiomaPTBR().language;
    private gridApi;
    private gridColumnApi;

    fileNameDialogRef: MatDialogRef<CidadesDialogComponent>;

    // Construtor da classe Cidades
    constructor(public _http: HttpClient,
                public api: CidadeServices,
                private translate: TranslateService,
                private pageTitleService: PageTitleService,
                private dialog: MatDialog,
                private snackBar: MatSnackBar) {
        this.pageTitleService.setTitle('Cidades');
        const params = {
            skipHeader: false,
            skipFooters: true,
            skipGroups: true,
            fileName: 'export.csv'
        };

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
            {headerName: 'Id', field: 'id',  hide: true,},
            {headerName: 'Cidade', field: 'cidade'},
            {headerName: 'Estado', field: 'estado'},
            {headerName: 'Qtd. de motoboys', field: 'motoboy'},
            {headerName: 'Qtd. de clientes', field: 'customer'},
            {headerName: 'Qtd. de empresas', field: 'company'}
            // {headerName: 'Autorizado', field: 'authorized'},
            // {
            //     headerName: 'Ação',
            //     lockPosition: false,
            //     cellClass: 'locked-col',
            //     suppressNavigable: true,
            //     cellRenderer: function () {
            //         const display = 'block';
            //         const html = `<button class='btn btn-danger btn-mini'  style="background-color: #D5652B; color: white" data-action-type='editar'>
            //             <i class='icofont icofont-ui-edit'></i>Editar
            //          </button>
            //          <button class='btn btn-danger btn-mini'  style="background-color: #D5652B; color: white" data-action-type='deletar'>
            //              <i class='icofont icofont-ui-delete'></i>Deletar
            //          </button>`;
            //         return html;
            //     }
            // }
        ];

    }

    ngOnInit() {
        this.getAllReportCity();
        this.getAllCidades()
    }

    /**
     * Abre o dialog com o registro a ser atualizado / novo
     * @param file
     */
    openFileDialog(file?) {
        if (file) { // Editando
            this.fileNameDialogRef = this.dialog.open(CidadesDialogComponent, {
                height: '350px',
                width: '1200px',
                // position: {
                //     'top': '15%',
                //     'left': '25%'
                // },
                data: this.api.cityData(file)
            });
        } else { // Novo
            this.fileNameDialogRef = this.dialog.open(CidadesDialogComponent, {
                height: '350px',
                width: '1200px',
                data: this.api.cityNewData(file)
            });
        }

        this.fileNameDialogRef.afterClosed().pipe(
            filter(name => name)
        ).subscribe(name => {
            if (this.rowCidades) {
                const index = this.rowCidades.findIndex(f => f.descricao === file);
                if (index !== -1) {
                    this.rowCidades[index] = {name, content: file};
                } else {
                    this.rowCidades.push({name, content: ''});
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
                    let selectedRows = {};
                    const endpoint = new Config().getEndpoint();
                    this._http.get(`${endpoint}city/${id}`)
                        .subscribe(data => {
                            selectedRows = data;
                            console.table(selectedRows);
                            this.openFileDialog(selectedRows);
                        }, err => {
                            console.log(err);
                        });
                    break;
                case 'deletar':
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
    }

    public onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        params.api.sizeColumnsToFit();
    }

    /**
     * Busca todos os Cidades
     * @return List of {objects<T>}
     */
    public getAllCidades() {
        const endpoint = new Config().getEndpoint();
        this._http.get(`${endpoint}city`)
            .subscribe(
                data => { // @ts-ignore
                    this.rowCidades = data;
                    this.rowData = data;
                },
                err => console.error(err),
                () => console.log(this.rowCidades)
            );
    }

    public getAllReportCity() {
        const endpoint = new Config().getEndpoint();
        this._http.get(`${endpoint}city/report`)
            .subscribe(
                data => { // @ts-ignore
                    this.rowCidadesReport = data;
                    this.rowDataReport = data;
                },
                err => console.error(err),
                () => console.log(this.rowCidadesReport)
            );
    }

}

