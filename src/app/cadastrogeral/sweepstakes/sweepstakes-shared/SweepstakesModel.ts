/**
 * CRUD do endpoint {{host}}/sweepstakes
 * @author Joel Schecheleski
 * @date 16/10/2019
 */

import {Resource} from '../../../Resource';

export class SweepstakesModel extends Resource {
    public createdAt?: Date;
    public cashPrize?: number;
    public quantityWinners?: number;
    public userCategory?: string;
    public quantityServices?: number;
    public quantityQualifiedUsers?: number;
    public createdBy?: string;
}
