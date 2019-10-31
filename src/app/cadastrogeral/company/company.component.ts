import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {PageTitleService} from '../../core/page-title/page-title.service';
import {GridOptions} from 'ag-grid-community';
import 'ag-grid-community';
import {IdiomaPTBR} from '../../idioma-PTBR';
import {MatButton, MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {filter} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {HttpClient} from '@angular/common/http';
import {Config} from '../../app-config';
import {CompanyDialogComponent} from './company-form/company-dialog.component';
import {CompanyServices} from './company-shared/company.services';
import * as moment from 'moment';

@Component({
    selector: 'ms-companies',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss'],
    providers: [CompanyServices]
})
export class CompanyComponent implements OnInit {
    public gridOptions: GridOptions;
    public rowData: any;
    public rowUser: any;
    public columnDefs: any;
    public defaultColDef: any;
    public language = new IdiomaPTBR().language;
    private gridApi;
    private gridColumnApi;
    private url = new Config().getEndpoint();

    fileNameDialogRef: MatDialogRef<CompanyDialogComponent>;

    // Construtor da classe Usuario
    constructor(public _http: HttpClient,
                public api: CompanyServices,
                private translate: TranslateService,
                private pageTitleService: PageTitleService,
                private dialog: MatDialog,
                private snackBar: MatSnackBar) {
        this.pageTitleService.setTitle('Gerenciamento de empresas');

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
            {headerName: 'Nome', field: 'comercialName'},
            {headerName: 'Email', field: 'email'},
            {headerName: 'Contato', field: 'username'},
            {
                headerName: 'Status', field: 'registrationStatus',
                cellRenderer: function (params) {
                    return `${
                        params.value === 'APPROVED' ? 'Aprovado' :
                            params.value === 'UNDER_ANALYSIS' ? 'Sob Análise' :
                                params.value === 'REJECTED' ? 'Rejeitado' :
                                    params.value === 'BLOCKED' ? 'Bloqueado' :
                                        params.value === 'ACCESS_DENIED' ? 'Acesso negado' :
                                            params.value === '' ? 'Indefinido' : ''}`;
                }
            },
            {
                headerName: 'Data de cadastro', field: 'createdAt', cellRenderer: (data) => {
                    return moment(data.value).format('DD/MM/YYYY HH:mm');
                }
            },
            // {headerName: 'Tipo de usuário', field: 'userType'},
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
        this.getAllUsers()
    }

    /**
     * Abre o dialog com o registro a ser atualizado / novo
     * @param file
     */
    openFileDialog(file ?) {
        if (file) { // Editando
            this.fileNameDialogRef = this.dialog.open(CompanyDialogComponent, {
                height: '650px',
                width: '1200px',
                data: this.api.userData(file)
            });
        } else { // Novo
            this.fileNameDialogRef = this.dialog.open(CompanyDialogComponent, {
                height: '650px',
                width: '1200px',
                data: this.api.userData(file)
            });
        }

        this.fileNameDialogRef.afterClosed().pipe(
            filter(descricao => descricao)
        ).subscribe(descricao => {
            if (this.rowUser) {
                const index = this.rowUser.findIndex(f => f.descricao === file);
                if (index !== -1) {
                    this.rowUser[index] = {descricao, content: file};
                } else {
                    this.rowUser.push({descricao, content: ''});
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
            const id = e.data.username;
            const actionType = e.event.target.getAttribute('data-action-type');
            switch (actionType) {
                case 'editar':
                    let selectedRows = {};
                    // IMPLEMENTAR A BUSCA POR UM REGISTRO ESPECÍFICO QUANDO CLICADO REGISTRO ATUAL /Paciente/397
                    this._http.get(`${this.url}user/${id}`)
                        .subscribe(data => {
                            selectedRows = data;
                            // // console.table(selectedRows);
                            this.openFileDialog(selectedRows);
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

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        params.api.sizeColumnsToFit();
    }

    getAllUsers() {
        const endpoint = new Config().getEndpoint();
        this._http.get(`${endpoint}user/type/company`)
            .subscribe(
                data => { // @ts-ignore
                    this.rowUser = data;
                    this.rowData = data;
                }
            );
    }
}
