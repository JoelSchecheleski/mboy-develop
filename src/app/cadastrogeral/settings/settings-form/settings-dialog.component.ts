import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {isNullOrUndefined} from '@swimlane/ngx-datatable/release/utils';
import {DomSanitizer} from '@angular/platform-browser';
import {SettingsServices} from '../settings-shared/settings.services';
import {IdiomaPTBR} from '../../../idioma-PTBR';
import {Config} from '../../../app-config';
import {SettingPerHr, SettingPerKm} from '../settings-shared/settingsModel';

@Component({
    templateUrl: './settings-form.html',
    providers: [SettingsServices]
})
export class SettingsDialogComponent implements OnInit {
    private readonly status: any;
    public language = new IdiomaPTBR().language;
    public formulario: FormGroup;
    private readonly config: string;
    private url = new Config().getEndpoint();

    public hrSettingStatusList: [SettingPerHr];
    public kmSettingStatusList: [SettingPerKm];
    public selectedSettingHr: any;
    public selectedSettingKm: any;

    constructor(
        public api: SettingsServices,
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<SettingsDialogComponent>,
        private domSanitizer: DomSanitizer,
        @Inject(MAT_DIALOG_DATA) private data
    ) {
        if (data.id) {
            this.status = 'Editando';
            this.config = data.id;
        } else {
            this.status = 'Novo';
            this.config = 'Nova configuração!';
        }
    }

    async ngOnInit() {
        this.setParameters();
        this.formulario = this.formBuilder.group({
            id: this.data.id,
            minimumValueBankSlip: this.data.minimumValueBankSlip,
            settingPerHourName: this.data.settingPerHourName,
            settingPerKmName: this.data.settingPerKmName,
            active: this.data.active
        });

        console.log(this.data);
        this.selectedSettingHr = this.data.settingPerHourNameId;
        this.selectedSettingKm = this.data.settingPerKmNameId;
    }

    submit(form) {
        if (form.status !== 'VALID') {
            return;
        }

        const objeto = (JSON.parse(JSON.stringify(form.value)));

        this.api.client_http.post(`${this.url}settings/config`, objeto)
            .subscribe(data => {
                    this.dialogRef.close(`${form.value.descricao}`);
                }
            );
    }

    public setParameters() {
        this.getAllKmSettings();
        this.getAllHrSettings();
    }

    public getAllKmSettings() {
        this.api.client_http.get(`${this.url}settings/kilometers/0`)
            .subscribe(
                data => { // @ts-ignore
                    this.kmSettingStatusList = data as [SettingPerKm];
                },
                err => console.error(err)
            );
    }

    public getAllHrSettings() {
        this.api.client_http.get(`${this.url}settings/hour/0`)
            .subscribe(
                data => { // @ts-ignore
                    this.hrSettingStatusList = data as [SettingPerHr];
                },
                err => console.error(err)
            );
    }
}
