import {Resource} from '../../Resource';

export class PushModel extends Resource {
    private _state: string;
    private _city: string;
    private _message: string;

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        this._message = value;
    }

    constructor(state: string, city: string, message: string) {
        super();
        this._state = state;
        this._city = city;
        this._message = message;
    }
}
