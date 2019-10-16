/**
 * CRUD do endpoint {{host}}/sweepstakes
 * @author Joel Schecheleski
 * @date 16/10/2019
 */

import {Resource} from '../../../Resource';

export class SweepstakesModel extends Resource {
    public createdAt?: Date;
    public cashPrize?: number;
    public quantityWinners?: bigint;
    public userCategory?: string;
    public quantityServices?: bigint;
    public quantityQualifiedUsers?: bigint;
    public createdBy?: string;
}
