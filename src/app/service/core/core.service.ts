import {Injectable} from '@angular/core';
import {MatDialogRef, MatDialog} from '@angular/material';
import 'rxjs/Rx';
import {AddNewUserComponent} from '../../widget-component/pop-up/add-new-user/add-new-user.component';
import {EditNewUserComponent} from '../../widget-component/pop-up/edit-new-user/edit-new-user.component';
import {DeleteDialogComponent} from '../../widget-component/pop-up/delete-dialog/delete-dialog.component';
import {VideoPlayerComponent} from '../../widget-component/pop-up/video-player/video-player.component';
import {PaymentMessageComponent} from '../../widget-component/pop-up/payment-message/payment-message.component';
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
        let dialogRef: MatDialogRef<AddNewUserComponent>;
        dialogRef = this.matDialog.open(AddNewUserComponent);

        return dialogRef.afterClosed();
    }

    // editList function is used to open Edit Dialog Component
    editList(data) {
        let dialogRef: MatDialogRef<EditNewUserComponent>;
        dialogRef = this.matDialog.open(EditNewUserComponent);
        dialogRef.componentInstance.data = data;

        return dialogRef.afterClosed();
    }

    // deleteDiaglog function is used to open the Delete Dialog Component
    deleteDialog(data: string) {
        let dialogRef: MatDialogRef<DeleteDialogComponent>;
        dialogRef = this.matDialog.open(DeleteDialogComponent);
        dialogRef.componentInstance.data = data;

        return dialogRef.afterClosed();
    }

    // get Json file for courses module.
    getCourses() {
        return this.http.get('assets/data/courses.json').map(response => response);
    }

    // videoPlayerDialog method is used to open a video player dialog component.
    videoPlayerDialog(video: string) {
        let dialogRef: MatDialogRef<VideoPlayerComponent>;
        dialogRef = this.matDialog.open(VideoPlayerComponent);

        dialogRef.componentInstance.video = video;
        return dialogRef.afterClosed();
    }

    // paymentDialog method is used to open a payment dialog component.
    paymentDialog(message: string) {
        let dialogRef: MatDialogRef<PaymentMessageComponent>;
        dialogRef = this.matDialog.open(PaymentMessageComponent);

        dialogRef.componentInstance.paymentMessage = message;
        return dialogRef.afterClosed();
    }
}

