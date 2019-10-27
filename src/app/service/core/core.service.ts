import {Injectable} from '@angular/core';
import {MatDialogRef, MatDialog} from '@angular/material';
import 'rxjs/Rx';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

@Injectable({
    providedIn: 'root'
})

export class CoreService {

    sidenavOpen = true;
    sidenavMode = 'side';
    horizontalStatus = false;
    horizontalSizeStatue = false;

    constructor(private matDialog: MatDialog,
                private http: HttpClient) {
    }

    // addNewUserDailog function is used to open Add Dialog Component
    addNewUserDailog() {

    }

    // editList function is used to open Edit Dialog Component
    editList(data) {
    }

    // deleteDiaglog function is used to open the Delete Dialog Component
    deleteDialog(data: string) {
    }

    // get Json file for courses module.
    getCourses() {
        return this.http.get('assets/data/courses.json').map(response => response);
    }

    // videoPlayerDialog method is used to open a video player dialog component.
    videoPlayerDialog(video: string) {
    }

    // paymentDialog method is used to open a payment dialog component.
    paymentDialog(message: string) {
    }
}

