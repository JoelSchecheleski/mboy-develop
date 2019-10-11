/**
 * CRUD do endpoint {{host}}/State
 * @author Joel Schecheleski
 * @date 11/10/2019
 */

import {Resource} from '../../Resource';

export class StateModel extends Resource {
    public name?: string;
    public abbreviation: string;
}
