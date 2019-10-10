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

import {UserDialogComponent} from './user-form/user-dialog.component';
import {UserServices} from './user-shared/user.services';

@Component({
    selector: 'ms-paciente',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    providers: [UserServices]
})
export class UserComponent implements OnInit {
    public gridOptions: GridOptions;
    public rowData: any;
    public rowUser: any;
    public columnDefs: any;
    public defaultColDef;
    public language = new IdiomaPTBR().language;
    private gridApi;
    private gridColumnApi;

    fileNameDialogRef: MatDialogRef<UserDialogComponent>;

    // Construtor da classe Usuario
    constructor(public _http: HttpClient,
                public api: UserServices,
                private translate: TranslateService,
                private pageTitleService: PageTitleService,
                private dialog: MatDialog,
                private snackBar: MatSnackBar) {
        this.pageTitleService.setTitle('Usuários');

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
            {headerName: 'Usuário', field: 'username'},
            {headerName: 'Nome', field: 'name'},
            {headerName: 'Email', field: 'email'},
            {headerName: 'Status', field: 'registrationStatus'},
            // {headerName: 'Tipo de usuário', field: 'userType'},
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
        this.getAllUsers()
    }

    /**
     * Abre o dialog com o registro a ser atualizado / novo
     * @param file
     */
    openFileDialog(file?) {
        if (file) { // Editando
            this.fileNameDialogRef = this.dialog.open(UserDialogComponent, {
                height: '650px',
                width: '1200px',
                data: this.api.userData(file)
            });
        } else { // Novo
            this.fileNameDialogRef = this.dialog.open(UserDialogComponent, {
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
            // console.log(actionType);
            switch (actionType) {
                case 'editar':
                    let selectedRows = {};
                    // IMPLEMENTAR A BUSCA POR UM REGISTRO ESPECÍFICO QUANDO CLICADO REGISTRO ATUAL /Paciente/397
                    this._http.get(`http://localhost:8080/api/user/${id}`)
                        .subscribe(data => {
                            selectedRows = data;
                            console.table(selectedRows);
                            this.openFileDialog(selectedRows);
                        });
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

    public getAllUsers() {
        const endpoint = new Config().getEndpoint();
        this._http.get(`${endpoint}user`)
            .subscribe(
                data => { // @ts-ignore
                    this.rowUser = data;
                    this.rowData = data;
                },
                err => console.error(err),
                () => console.log(this.rowUser)
            );
    }

}
