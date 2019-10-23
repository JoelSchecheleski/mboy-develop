import {SecurityModel} from './securityModel';
import {Resource} from '../../Resource';

export class SettingsModel extends Resource {
    security?: SecurityModel;
    appName?: string;
    creditLimit?: number;
    cash?: number;
    bank_slip?: number;
    credit_card?: number;
    credit?: string;
    product_mototaxi?: string;
    product_delivery?: string;
    id_product_mototaxi?: number
    id_product_delivery?: number;
}
