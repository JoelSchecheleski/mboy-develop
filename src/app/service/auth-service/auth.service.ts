import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    // user: Observable<firebase.User>;
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
        // const datenow = new Date;
        // this.userData = JSON.parse(localStorage.getItem('infoUsuarioLogado'));
        // this.userSession = JSON.parse(localStorage.getItem('SESSAO'));
        // if (this.userData && (datenow.toLocaleString() < this.userSession['expiration'].toLocaleString())) {
        //     this.isLoggedIn = true;
        //     return true;
        // } else {
        //     this.isLoggedIn = false;
        //     return false;
        // }

        // this.isLoggedIn = true;
        return true;
    }

    /*
  * signupUserProfile method save email and password into firabse &
  * signupUserProfile method save the user sign in data into local storage.
  */
    signupUserProfile(value) {
        // this.firebaseAuth
        //     .auth
        //     .createUserWithEmailAndPassword(value.email, value.password)
        //     .then(value => {
        //         this.toastr.success('Successfully Signed Up!');
        //         this.setLocalUserProfile(value);
        //         this.router.navigate(['/']);
        //     })
        //     .catch(err => {
        //         this.toastr.error(err.message);
        //     });
    }

    /*
     * loginUser fuction used to login
     */
    loginUser(value) {
        // this.firebaseAuth
        //     .auth
        //     .signInWithEmailAndPassword(value.email, value.password)
        //     .then(value => {
        //         this.setLocalUserProfile(value);
        //         this.toastr.success('Successfully Logged In!');
        //         this.router.navigate(['/']);
        //     })
        //     .catch(err => {
        //         this.toastr.error(err.message);
        //     });
    }

    /*
     * resetPassword is used to reset your password
     */
    resetPassword(value) {
        // this.firebaseAuth.auth.sendPasswordResetEmail(value.email)
        //     .then(value => {
        //         this.toastr.success('A password reset link has been sent to this email.');
        //         this.router.navigate(['/session/login']);
        //     })
        //     .catch(err => {
        //         this.toastr.error(err.message);
        //     });
    }


    /*
     * resetPasswordV2 is used to reset your password
     */
    resetPasswordV2(value) {
        // this.firebaseAuth.auth.sendPasswordResetEmail(value.email)
        //     .then(value => {
        //         this.toastr.success('A password reset link has been sent to this email.');
        //         this.router.navigate(['/session/loginV2']);
        //     })
        //     .catch(err => {
        //         this.toastr.error(err.message);
        //     });
    }

    /*
     * logOut function is used to sign out
     */
    public logOut() {
        localStorage.removeItem('SESSAO');
        localStorage.removeItem('TOKEN');
        this.isLoggedIn = false;
        this.toastr.success('Successfully logged out!');
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
