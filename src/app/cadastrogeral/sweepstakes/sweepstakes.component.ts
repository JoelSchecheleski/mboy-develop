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

import {SweepstakesServices} from './sweepstakes-shared/sweepstakes-services';
import {HttpClient} from '@angular/common/http';
import {Config} from '../../app-config';
import {SweepstakesDialogComponent} from './sweepstakes-form/sweepstakes-dialog.component';
import {SweepstakesModel} from './sweepstakes-shared/SweepstakesModel';

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

    fileNameDialogRef: MatDialogRef<SweepstakesDialogComponent>;

    // Construtor da classe Sweepstakes
    constructor(public _http: HttpClient,
                public api: SweepstakesServices,
                private translate: TranslateService,
                private pageTitleService: PageTitleService,
                private dialog: MatDialog,
                private snackBar: MatSnackBar) {
        this.pageTitleService.setTitle('Sweepstakes');
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
            {headerName: 'Criado em', field: 'createdAt'},
            {headerName: 'Valor por contemplado', field: 'cashPrize'},
            {headerName: 'Quantidade contemplados', field: 'quantityWinners'},
            {headerName: 'Quantidade mínima de corridas', field: 'quantityServices'},
            {headerName: 'Quantidade usuarios qualificados', field: 'quantityQualifiedUsers'},
            {headerName: 'Criado por', field: 'createdBy'},
        ];

    }

    ngOnInit() {
        this.getAllSweepstakes();
    }

    /**
     * Abre o dialog com o registro a ser atualizado / novo
     * @param file
     */
    openFileDialog(file?) {
        if (file) { // Editando
            this.fileNameDialogRef = this.dialog.open(SweepstakesDialogComponent, {
                height: '350px',
                width: '1200px',
                // position: {
                //     'top': '15%',
                //     'left': '25%'
                // },
                data: this.api.sweepstakesData(file)
            });
        } else { // Novo
            this.fileNameDialogRef = this.dialog.open(SweepstakesDialogComponent, {
                height: '350px',
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
                case 'editar':
                    let selectedRows = {};
                    const endpoint = new Config().getEndpoint();
                    this._http.get(`${endpoint}sweepstakes/${id}`)
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
    onSelectionChanged($event) {
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
                err => console.error(err),
                () => console.log(this.rowSweepstakes)
            );
    }
}
