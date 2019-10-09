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
import {PacienteDialogComponent} from './paciente-form/paciente-dialog.component';
import {PacienteServices} from './paciente-shared/paciente.services';
import {AntibiogramaServices} from '../antibiograma/antibiograma-shared/antibiograma.services';
import {HttpClient} from '@angular/common/http';
import {Config} from '../../app-config';

@Component({
    selector: 'ms-paciente',
    templateUrl: './paciente.component.html',
    styleUrls: ['./paciente.component.scss'],
    providers: [PacienteServices]
})
export class PacienteComponent implements OnInit {
    public rowPaciente: any;
    public gridOptions: GridOptions;
    public rowData: any;
    public columnDefs: any;
    public rowSelection;
    public defaultColDef;
    public language = new IdiomaPTBR().language;
    private gridApi;
    private gridColumnApi;

    fileNameDialogRef: MatDialogRef<PacienteDialogComponent>;

    // Construtor da classe paciente
    constructor(public _http: HttpClient,
                public api: PacienteServices,
                private translate: TranslateService,
                private pageTitleService: PageTitleService,
                private dialog: MatDialog,
                private snackBar: MatSnackBar) {
        this.pageTitleService.setTitle('Pacientes');
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
            {headerName: 'Prontuário', field: 'id', rowDrag: true},
            {headerName: 'Nome', field: 'nome'},
            {headerName: 'Data de Nascimento', field: 'nascimento'},
            {headerName: 'Nome da Mãe', field: 'nomemae'},
            // {headerName: 'CPF', field: 'cpf'},
            // {headerName: 'RG', field: 'certidao'},
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
        this.getAllPacientes()
    }

    /**
     * Abre o dialog com o registro a ser atualizado / novo
     * @param file
     */
    openFileDialog(file?) {
        if (file) { // Editando
            this.fileNameDialogRef = this.dialog.open(PacienteDialogComponent, {
                height: '650px',
                width: '1200px',
                // position: {
                //     'top': '15%',
                //     'left': '25%'
                // },
                data: this.api.pacienteData(file)
            });
        } else { // Novo
            this.fileNameDialogRef = this.dialog.open(PacienteDialogComponent, {
                height: '650px',
                width: '1200px',
                data: this.api.pacienteData(file)
            });
        }

        this.fileNameDialogRef.afterClosed().pipe(
            filter(descricao => descricao)
        ).subscribe(descricao => {
            if (this.rowPaciente) {
                const index = this.rowPaciente.findIndex(f => f.descricao === file);
                if (index !== -1) {
                    this.rowPaciente[index] = {descricao, content: file};
                } else {
                    this.rowPaciente.push({descricao, content: ''});
                }
            }
            this.ngOnInit();
        });
        // console.log(this.rowAntibiograma);
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
                    let selectedRows = {};
                        // IMPLEMENTAR A BUSCA POR UM REGISTRO ESPECÍFICO QUANDO CLICADO REGISTRO ATUAL /Paciente/397
                    this._http.get(`http://localhost:8080/api/Paciente/${id}`)
                        .subscribe(data => {
                            selectedRows = data;
                            console.table(selectedRows);
                            this.openFileDialog(selectedRows);
                        });
                    // const selectedRows = this.gridApi.getSelectedRows();
                    // let selectedRowsString = '';
                    // selectedRows.forEach(function (rowSelection, index) {
                    //     if (index !== 0) {
                    //         selectedRowsString += ',';
                    //     }
                    //     selectedRowsString += rowSelection.descricao;
                    // });
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
     * Busca todos os pacientes
     * @return List of {objects<T>}
     */
    public getAllPacientes() {
        const endpoint = new Config().getEndpoint();
        this._http.get(`${endpoint}Paciente/Simple`)
            .subscribe(
                data => { // @ts-ignore
                    this.rowPaciente = data;
                    this.rowData = data;
                },
                err => console.error(err),
                () => console.log(this.rowPaciente)
            );
        {

        }
        // this.api.GET().subscribe(
        //     data => { // @ts-ignore
        //         this.rowPaciente = data;
        //         this.rowData = data;
        //     },
        //     err => console.error(err),
        //     () => console.log(this.rowPaciente)
        // );
    }

}
