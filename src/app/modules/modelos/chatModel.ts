import {Resource} from '../../Resource';
import {EChatType} from '../../Enums/EChatType';
import {EChatStatus} from '../../Enums/EChatStatus';
import {EUserType} from '../../Enums/EUserType';

export class ChatModel extends Resource {
    chatType?: EChatType;
    subject?: string;
    message?: string;
    messages?: string;
    createdby?: string;
    status?: EChatStatus;
    createdAt?: any;
    serviceLog?: any;
    email?: string;
    userType?: EUserType;
    idDaCorrida?: null
}
