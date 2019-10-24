import {Resource} from '../../Resource';

export class EmailModel extends Resource{
    to: string;
    subject: string;
    content: string;
    multipart: boolean;
    html: boolean;
}
