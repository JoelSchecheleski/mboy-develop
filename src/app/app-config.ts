import { Injectable } from '@angular/core';

@Injectable()
export class Config {
    getEndpoint() {
        return 'http://localhost:8080/api/';
    }
}

