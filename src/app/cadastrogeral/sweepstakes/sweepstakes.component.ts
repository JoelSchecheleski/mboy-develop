import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {PageTitleService} from '../../core/page-title/page-title.service';

import {GridOptions} from 'ag-grid-community';
import 'ag-grid-community';
import {IdiomaPTBR} from '../../idioma-PTBR';
import {isNullOrUndefined} from 'util';
import {MatButton, MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';

import {filter} from 'rxjs/operators';
import Swal from 'sweetalert2';

import {SweepstakesServices} from './sweepstakes-shared/sweepstakes-services';
import {HttpClient} from '@angular/common/http';
import {Config} from '../../app-config';
import {SweepstakesDialogComponent} from './sweepstakes-form/sweepstakes-dialog.component';
import {SweepstakesModel} from './sweepstakes-shared/SweepstakesModel';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {Router} from '@angular/router';
import {isNull} from '@angular/compiler/src/output/output_ast';
import * as moment from 'moment';

@Component({
    selector: 'ms-sweepstakes',
    templateUrl: './sweepstakes.component.html',
    styleUrls: ['./sweepstakes.component.scss'],
    providers: [SweepstakesServices]
})
export class SweepstakesComponent implements OnInit {
    public rowSweepstakes: any;
    public gridOptions: GridOptions;
    public rowData: any;
    public columnDefs: any;
    public rowSelection;
    public defaultColDef;
    public language = new IdiomaPTBR().language;
    private gridApi;
    private gridColumnApi;
    selectedRowsReport: any;

    public data: any;
    @Output() messageToEmit = new EventEmitter<string>();
    @Output() respostaFilho = new EventEmitter<string>();

    fileNameDialogRef: MatDialogRef<SweepstakesDialogComponent>;

    // Construtor da classe Sweepstakes
    constructor(public _http: HttpClient,
                public api: SweepstakesServices,
                private translate: TranslateService,
                private pageTitleService: PageTitleService,
                private dialog: MatDialog,
                private snackBar: MatSnackBar,
                private router: Router) {
        this.pageTitleService.setTitle('Sorteios');
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
            {headerName: 'Id', field: 'id', hide: true},
            // {headerName: 'Criado em', field: 'createdAt'},
            {
                headerName: 'Criado em', field: 'createdAt', cellRenderer: (data) => {
                    return moment(data.value).format('DD/MM/YYYY HH:mm');
                }
            },
            {headerName: 'Valor do prémio', field: 'cashPrize'},
            {headerName: 'Nº contemplados', field: 'quantityWinners'},
            {headerName: 'Corridas requeridas', field: 'quantityServices'},
            {headerName: 'Nº de qualificados', field: 'quantityQualifiedUsers'},
            // {headerName: 'Criado por', field: 'createdBy'},
            {
                headerName: 'Ação',
                lockPosition: false,
                cellClass: 'locked-col',
                suppressNavigable: true,
                cellRenderer: function () {
                    const display = 'block';
                    const html = `<button class='mat-button' style="color: #D5652B" data-action-type='resultados'>
                        Ver resultados
                     </button>`;
                    return html;
                }
            }
        ];

    }

    ngOnInit() {
        this.getAllSweepstakes();
    }

    /**
     * Abre o dialog com o registro a ser atualizado / novo
     * @param file
     */
    openFileDialog(file ?) {
        if (file) { // Editando
            this.fileNameDialogRef = this.dialog.open(SweepstakesDialogComponent, {
                height: '50%',
                width: '1200px',
                data: this.api.sweepstakesData(file)
            });
        } else { // Novo
            this.fileNameDialogRef = this.dialog.open(SweepstakesDialogComponent, {
                height: '450px',
                width: '1200px',
                data: this.api.sweepstakesData(file)
            });
        }

        this.fileNameDialogRef.afterClosed().pipe(
            filter(cashPrize => cashPrize)
        ).subscribe(cashPrize => {
            if (this.rowSweepstakes) {
                const index = this.rowSweepstakes.findIndex(f => f.descricao === file);
                if (index !== -1) {
                    this.rowSweepstakes[index] = {cashPrize, content: file};
                } else {
                    this.rowSweepstakes.push({cashPrize, content: ''});
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
                case 'resultados':
                    // let selectedRowsReport = {};
                    const endpointReport = new Config().getEndpoint();
                    if (id != null) {
                        this._http.get(`${endpointReport}sweepstakes/sweepstakes-report/${id}`)
                            .subscribe(data => {
                                this.selectedRowsReport = data;
                                this.sendToChild(data);
                                // console.table(this.selectedRowsReport);
                            }, err => {
                            });
                    }
                    break;
            }
        }
    }

    public sendToChild(data: any) {
        this.data = data;
        this.messageToEmit.emit(data);
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

    /**
     * Busca todos os sorteios realizados
     * @return List of {objects<T>}
     */
    public getAllSweepstakes() {
        const endpoint = new Config().getEndpoint();
        this._http.get(`${endpoint}sweepstakes`)
            .subscribe(
                data => {
                    this.rowSweepstakes = data;
                    this.rowData = data;
                },
                err => {
                    // console.error(err);
                    if (err.status === 0) {
                        this.router.navigate(['/session/loginV2']);
                    }
                }
            );
    }

    public reciverFeedback(respostaFilho) {
        console.log('Recebeu resposta do filho! ' + respostaFilho);
        this.selectedRowsReport = null;
        this.ngOnInit();
    }

}
