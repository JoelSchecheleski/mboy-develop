import {Resource} from '../../../Resource';

export class TablekmModel extends Resource {
    public description?: String;
    public additionalValuePerKm?: number;
    public listRangeSettings?: [TableRangeModel];
}

export class TableRangeModel extends Resource {
    public kmInitial?: number;
    public kmFinal?: number;
    public value?: number;
    public details = () => (`id ${this.id}, kmInitial ${this.kmInitial}, kmFinal ${this.kmFinal}`);

}
