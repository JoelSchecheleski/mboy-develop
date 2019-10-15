/**
 * CRUD do endpoint {{host}}/City
 * @author Joel Schecheleski
 * @date 11/10/2019
 */

import {Resource} from '../../Resource';
import {StateModel} from './stateModel';

export class CityModel extends Resource {
    public state_id?: any;
    public name?: string;
    public authorized?: boolean;
    public ibgeCode?: string;
    // public zipCodes?: string[];
    // public state: StateModel;
}
