// @ts-ignore
import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {TranslateService} from '@ngx-translate/core';
import {PageTitleService} from '../../core/page-title/page-title.service';
// @ts-ignore
import {GridOptions} from 'ag-grid-community';
import 'ag-grid-community';
import {IdiomaPTBR} from '../../idioma-PTBR';
// @ts-ignore
import {MatButton, MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
// @ts-ignore
import {filter} from 'rxjs/operators';
// @ts-ignore
import {HttpClient} from '@angular/common/http';
import {Config} from '../../app-config';

import {SettingsServices} from './settings-shared/settings.services';
// @ts-ignore
import Swal from 'sweetalert2';
import {SettingPerHr, SettingPerKm, SettingsModel} from './settings-shared/settingsModel';
// @ts-ignore
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'ms-table-kilometer',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    providers: [SettingsServices]
})
export class SettingsComponent implements OnInit {
    private data: any;
    public gridOptions: GridOptions;
    // public rowData: any;
    // public rowSetting: any;
    public columnDefs: any;
    public defaultColDef: any;
    public language = new IdiomaPTBR().language;
    private gridApi;
    private gridColumnApi;
    private url = new Config().getEndpoint();

    private readonly status: any;
    public formulario: FormGroup;
    private readonly config: string;

    public hrSettingStatusList: [SettingPerHr];
    public kmSettingStatusList: [SettingPerKm];
    public selectedSettingHr: any;
    public selectedSettingKm: any;

    private settingsModel = new SettingsModel();

    constructor(private api: SettingsServices,
                private _http: HttpClient,
                private formBuilder: FormBuilder) {

        this.formulario = this.formBuilder.group({
            id: [null],
            minimumValueBankSlip: [null],
            settingPerHourName: [null, Validators.required],
            settingPerKmName: [null, Validators.required],
            active: [null],
        });
    }

    ngOnInit() {
        this._http.get(`${this.url}settings/config/0`)
            .subscribe(
                data => { // @ts-ignore
                    this.data = data[0];
                    this.selectedSettingHr = this.data.settingPerHourNameId ? this.data.settingPerHourNameId : null;
                    this.selectedSettingKm = this.data.settingPerKmNameId ? this.data.settingPerKmNameId : null;
                }
            );
        this.setParameters();
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

    submit(form) {
        if (form.status !== 'VALID') {
            return;
        }
        const objeto = (JSON.parse(JSON.stringify(form.value)));

        this.settingsModel.id = this.data.id;
        this.settingsModel.active = true;
        this.settingsModel.settingPerHourNameId = this.selectedSettingHr;
        this.settingsModel.settingPerKmNameId = this.selectedSettingKm;
        this.settingsModel.minimumValueBankSlip = 0;

        this.api.client_http.put(`${this.url}settings/update-config`, JSON.stringify(this.settingsModel))
            .subscribe(data => {
                Swal.fire({
                    position: 'center',
                    type: 'success',
                    title: 'Configurações de valores realizado com sucesso',
                    showConfirmButton: false,
                    animation: true,
                    timer: 2500
                });
            }, error => {
                Swal.fire({
                    position: 'center',
                    type: 'error',
                    title: 'Não foi possível configurar os valores',
                    showConfirmButton: false,
                    animation: true,
                    timer: 2500
                });
            })
    }

    /**
     * Define as configurações iniciais
     */
    public setParameters() {
        this.getAllKmSettings();
        this.getAllHrSettings();
    }

    public getAllKmSettings() {
        this.api.client_http.get(`${this.url}settings/kilometers/0`)
            .subscribe(
                data => { // @ts-ignore
                    this.kmSettingStatusList = data as [SettingPerKm];
                }
            );
    }

    public getAllHrSettings() {
        this.api.client_http.get(`${this.url}settings/hour/0`)
            .subscribe(
                data => { // @ts-ignore
                    this.hrSettingStatusList = data as [SettingPerHr];
                }
            );
    }
}
