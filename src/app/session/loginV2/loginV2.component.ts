import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth-service/auth.service';
import {ViewEncapsulation} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiMboy} from '../session.service';

@Component({
    selector: 'ms-loginV2-session',
    templateUrl: './loginV2-component.html',
    styleUrls: ['./loginV2-component.scss', '../../../assets/styles/styles.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [ApiMboy]
})
export class LoginV2Component {
    frmLogin: FormGroup;
    submitted: boolean;
    public failLogin = false;
    public today: number = Date.now();

    // public username = 'demo@example.com';
    // public password = '0123456789';

    public username = new FormControl('', Validators.required);
    public password = new FormControl('', Validators.required);

    // slideConfig = {'slidesToShow': 1, 'slidesToScroll': 1, 'autoplay': true, 'autoplaySpeed': 1000, 'dots': false, 'arrows': false};

    // sessionSlider: any [] = [
    //     {
    //         image: 'assets/img/login-slider1.jpg',
    //         name: 'Francisco Abbott',
    //         designation: 'CEO-Gene',
    //         content: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, ' +
    //             'and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.'
    //     },
    //     {
    //         image: 'assets/img/login-slider2.jpg',
    //         name: 'Samona Brown',
    //         designation: 'Designer',
    //         content: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, ' +
    //             'and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.'
    //     },
    //     {
    //         image: 'assets/img/login-slider3.jpg',
    //         name: 'Anna Smith',
    //         designation: 'Managing Director',
    //         content: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, ' +
    //             'and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.'
    //     }
    // ]

    constructor(public authService: AuthService,
                public translate: TranslateService,
                public api: ApiMboy,
                public authenticationMedeasy: ApiMboy,
                private router: Router) {

        this.frmLogin = new FormGroup({
            username: this.username,
            password: this.password
        });
    }

    // Se tudo estiver OK então acessa o sistema
    // login(value) {
    //     this.authService.loginUser(value);
    // }

    // TODO: Login com o sistema
    login() {
        console.log('Efetuando login...');
        const dados = this.authenticationMedeasy.login(this.frmLogin.value.username, this.frmLogin.value.password);
        // if (dados['jwtToken'] != null) {
        //     console.log('Login Efetuado com sucesso');
        //     // this.router.navigate(['/dashboard/geral']);
        //     this.router.navigate(['/']);
        // } else {
        //     console.log('Usuário ou senha incorretos');
        //     this.failLogin = true;
        // }

        // , subscribe(data => {
        //     const ret = JSON.parse(JSON.stringify(data));
        //     console.log('entrou em login component');
        //     if (ret.jwtToken != null) {
        //         console.log('Login Efetuado com sucesso');
        //          // this.router.navigate(['/dashboard/geral']);
        //         this.router.navigate(['/']);
        //     } else {
        //         console.log('Usuário ou senha incorretos');
        //         this.failLogin = true;
        //     }
        // });
    }

}



