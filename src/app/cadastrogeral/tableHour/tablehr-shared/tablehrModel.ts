import {Resource} from '../../../Resource';

export class TablehrModel extends Resource {
    public description?: String;
    public listRangeSettings?: [TableRangeModel];
}

export class TableRangeModel extends Resource {
    public hourInitial?: any;
    public hourFinal?: any;
    public value?: number;
}
