/**
 * CRUD do endpoint {{host}}/vind/bills
 * @author Joel Schecheleski
 * @date 22/10/2019
 */

import {Resource} from '../../Resource';
import {number} from 'ng2-validation/dist/number';
import {BillItems} from './billItems';
import {PaymentProfile} from './paymentProfile';

export class CreditModel extends Resource {
    customer_id?: number;
    payment_method_code?: string;
    bill_items: BillItems[] = new Array();
    payment_profile?: PaymentProfile;
}

