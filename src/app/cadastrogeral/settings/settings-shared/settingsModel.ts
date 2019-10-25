import {Resource} from '../../../Resource';

export class SettingsModel extends Resource {
    public minimumValueBankSlip?: number;
    public settingPerKmName?: string;
    public settingPerHourName?: string;
    public settingPerKmNameId?: number;
    public settingPerHourNameId?: number;
    public active?: boolean;
}

export class SettingPerHr extends Resource {
    public description?: String;
}

export class SettingPerKm extends Resource {
    public description?: number;
}