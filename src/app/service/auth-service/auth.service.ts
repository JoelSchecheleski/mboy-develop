import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {color} from 'd3';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userSession: any;
    userData: any;
    isLoggedIn = false;

    constructor(private router: Router,
                private toastr: ToastrService) {
    }

    /*
     *  getLocalStorageUser function is used to get local user profile data.
     */
    getLocalStorageUser() {
        return true;
    }


    /*
     * logOut function is used to sign out
     */
    public logOut() {
        localStorage.removeItem('SESSAO');
        localStorage.removeItem('TOKEN');
        this.isLoggedIn = false;
        this.toastr.success('Usuário deslogado!', null, {timeOut: 1500,
            toastClass: 'backgroud-toastr-color'});
        this.router.navigate(['/session/loginV2']);
    }

    /*
     * setLocalUserProfile function is used to set local user profile data.
     */
    setLocalUserProfile(value) {
        localStorage.setItem('userProfile', JSON.stringify(value));
        this.getLocalStorageUser();
        this.isLoggedIn = true;
    }
}
