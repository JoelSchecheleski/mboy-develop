import {Component, OnInit} from '@angular/core';
import {GridOptions} from 'ag-grid-community';
import {IdiomaPTBR} from '../../idioma-PTBR';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ClaimsDialogComponent} from './claims-form/claims-dialog.component';
import {HttpClient} from '@angular/common/http';
import {ClaimsServices} from './claims-shared/claims.services';
import {TranslateService} from '@ngx-translate/core';
import {PageTitleService} from '../../core/page-title/page-title.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButton} from '@angular/material/button';
import {filter} from 'rxjs/operators';
import {Config} from '../../app-config';
import Swal from 'sweetalert2';
import * as moment from 'moment';


@Component({
    selector: 'ms-claims',
    templateUrl: './claims.component.html',
    styleUrls: ['./claims.component.scss'],
    providers: [ClaimsServices]
})
export class ClaimsComponent implements OnInit {
    public rowClaimssReport: any;
    // public rowDataReport: any;
    public rowClaims: any;
    public gridOptions: GridOptions;
    public rowData: any;
    public columnDefs: any;
    public rowSelection;
    public defaultColDef;
    public language = new IdiomaPTBR().language;
    fileNameDialogRef: MatDialogRef<ClaimsDialogComponent>;
    private gridApi;
    private gridColumnApi;

    constructor(public _http: HttpClient,
                public api: ClaimsServices,
                private translate: TranslateService,
                private pageTitleService: PageTitleService,
                private dialog: MatDialog,
                private snackBar: MatSnackBar) {
        // this.pageTitleService.setTitle('Gerenciar reclamações');

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
            {
                headerName: 'Status', field: 'status',
                cellRenderer: function (params) {
                    // tslint:disable-next-line:max-line-length
                    return `${params.value === 'PENDING' ? '<button type="button" style="width: 10px;    height: 10px;    ' +
                        'padding: 0px 1px;    border-width: 0px;    border-radius: 15px;    text-align: center;    ' +
                        'font-size: 12px;    line-height: 1.42857;    background-color: #d52022"></button>     Em aberto'
                        : '<button type="button" style="width: 10px;    height: 10px;    padding: 0px 1px;    border-width: 0px;    ' +
                        'border-radius: 15px;    text-align: center;    font-size: 12px;    line-height: 1.42857;    ' +
                        'background-color: #40d54a"></button>     Resolvida'}`;
                }
            },
            {headerName: 'Titulo', field: 'subject'},
            {headerName: 'Usuario', field: 'createdby'},
            {headerName: 'E-Mail', field: 'email'},
            {
                headerName: 'Tipo de usuário', field: 'userType',
                cellRenderer: function (params) {
                    return `${params.value === 'CUSTOMER' ? 'Cliente' :
                        params.value === 'MOTOBOY' ? 'Motoboy' :
                            params.value === 'COMPANY' ? 'Empresa' : 'Administrador'}`
                }
            },
            {
                headerName: 'Data', field: 'createdAt', cellRenderer: (data) => {
                    return moment(data.value).format('DD/MM/YYYY HH:mm');
                }
            },
            {
                headerName: 'Ação',
                lockPosition: false,
                cellClass: 'locked-col',
                suppressNavigable: true,
                cellRenderer: function () {
                    const display = 'block';
                    const html = `<button class='btn-edit' data-action-type='editar'><i class='icofont icofont-ui-edit'></i>Editar</button>`;
                    return html;
                }
            }
        ];
    }


    ngOnInit() {
        this.getAllClaims()
    }

    /**
     * Abre o dialog com o registro a ser atualizado / novo
     * @param file
     */
    openFileDialog(file?) {
        if (file) { // Editando
            this.fileNameDialogRef = this.dialog.open(ClaimsDialogComponent, {
                height: '550px',
                width: '1200px',
                data: this.api.clamsData(file),
            });
        }

        this.fileNameDialogRef.afterClosed().pipe(
            filter(name => name)
        ).subscribe(name => {
            if (this.rowClaims) {
                const index = this.rowClaims.findIndex(f => f.descricao === file);
                if (index !== -1) {
                    this.rowClaims[index] = {name, content: file};
                } else {
                    this.rowClaims.push({name, content: ''});
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
                    this.openFileDialog(e.data);
                    // let dialogRef = this.dialog.open(Component);
                    // const sub = dialogRef.componentInstance.onAdd.subscribe(() => {
                    //
                    // });
                    this.fileNameDialogRef.afterClosed().subscribe(() => {
                        this.getAllClaims();
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
            selectedRowsString += rowSelection.status;
        });
    }

    public onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        params.api.sizeColumnsToFit();
    }

    /**
     * Busca todos os Claims
     * @return List of {objects<T>}
     */
    public getAllClaims() {
        const body = {};
        // const body = {'stats': 'PENDING'};
        const endpoint = new Config().getEndpoint();

        this._http.put(`${endpoint}chat/search`, body)
            .subscribe(
                data => { // @ts-ignore
                    this.rowClaims = data;
                    this.rowData = data;
                }
            );
    }

}
