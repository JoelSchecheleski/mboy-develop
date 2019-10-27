import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import 'hammerjs';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {Ng5BreadcrumbModule, BreadcrumbService} from 'ng5-breadcrumb';
import {DeviceDetectorModule, DeviceDetectorService} from 'ngx-device-detector';
import {TourMatMenuModule} from 'ngx-tour-md-menu';
import {ToastrModule} from 'ngx-toastr';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import {RoutingModule} from './app-routing.module';

import {AuthService} from './service/auth-service/auth.service';
import {PageTitleService} from './core/page-title/page-title.service';
// import {D3ChartService} from './core/nvD3/nvD3.service';

import {MBoyAppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {MenuToggleModule} from './core/menu/menu-toggle.module';
import {MenuItemsLeft} from './core/menu/menu-items/menu-items-left.service';
import {AuthGuard} from './core/guards/auth.guard';
import {HorizontalMenuItems} from './core/menu/horizontal-menu-items/horizontal-menu-items';

import {WidgetComponentModule} from './widget-component/widget-component.module';
import {HorizontalLayoutComponent} from './horizontal-layout/horizontal-layout.component';
// import {PagesModule} from './pages/pages.module';

import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

// Módulos do sistema
import {Interceptor} from './interceptor.module';
import {CadastrogeralModule} from './cadastrogeral/cadastrogeral.module';
import {MaterialSharedModule} from './modules/material-shared.module';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        DeviceDetectorModule.forRoot(),
        RoutingModule,
        FlexLayoutModule,

        CadastrogeralModule,  // Módulo de cadastros gerais do sistema
        MaterialSharedModule, // Módulo contendo todos os componentes do Material Design

        ToastrModule.forRoot(),
        WidgetComponentModule,
        Interceptor,

        NgbModalModule.forRoot(),
        Ng5BreadcrumbModule.forRoot(),
        TourMatMenuModule.forRoot(),
        PerfectScrollbarModule,
        MenuToggleModule,
        HttpClientModule,
        // MatSlideToggleModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        // AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        SweetAlert2Module.forRoot()
    ],
    declarations: [
        MBoyAppComponent,
        MainComponent,
        HorizontalLayoutComponent
    ],
    bootstrap: [MBoyAppComponent],
    providers: [
        // D3ChartService,
        MenuItemsLeft,
        HorizontalMenuItems,
        BreadcrumbService,
        PageTitleService,
        AuthService,
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        AuthGuard
    ],
    // exports: [MaterialSharedModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MboyAppModule {

    constructor(private matIconRegistry: MatIconRegistry,
                private domSanitizer: DomSanitizer) {

        this.matIconRegistry.addSvgIcon(
            'sorteios',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/sorteios.svg')
        );

        this.matIconRegistry.addSvgIcon(
            'pessoas',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/pessoas.svg')
        );

        this.matIconRegistry.addSvgIcon(
            'push',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/push.svg')
        );

        this.matIconRegistry.addSvgIcon(
            'reclamacoes',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/reclamacoes.svg')
        );

        this.matIconRegistry.addSvgIcon(
            'valores',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/valores.svg')
        );

        this.matIconRegistry.addSvgIcon(
            'add',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/add.svg')
        );

        this.matIconRegistry.addSvgIcon(
            'valores2',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/valores2.svg')
        );

        this.matIconRegistry.addSvgIcon(
            'pin',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/pin.svg')
        );
        this.matIconRegistry.addSvgIcon(
            'sair',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/sair.svg')
        );

    }

}
