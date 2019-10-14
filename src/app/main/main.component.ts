import {filter} from 'rxjs/operators';
import {Component, OnInit, OnDestroy, ViewChild, HostListener, ViewEncapsulation} from '@angular/core';
import {MenuItems} from '../core/menu/menu-items/menu-items';
import {BreadcrumbService} from 'ng5-breadcrumb';
import {PageTitleService} from '../core/page-title/page-title.service';
import {TranslateService} from '@ngx-translate/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {DeviceDetectorService} from 'ngx-device-detector';
import {TourService} from 'ngx-tour-md-menu';
import PerfectScrollbar from 'perfect-scrollbar';
import {AuthService} from '../service/auth-service/auth.service';
// import {EcommerceService} from '../service/ecommerce/ecommerce.service';
import {CoreService} from '../service/core/core.service';

const screenfull = require('screenfull');

@Component({
    selector: 'gene-layout',
    templateUrl: './main-material.html',
    styleUrls: ['./main-material.scss'],
    encapsulation: ViewEncapsulation.None
})

export class MainComponent implements OnInit, OnDestroy {
    name: any = '';
    image: any = '';
    root: any = 'ltr';
    layout: any = 'ltr';
    currentLang: any = 'pt-br';
    customizerIn = false;
    showSettings = false;
    chatpanelOpen = false;
    sidenavOpen = true;
    isMobile = false;
    isFullscreen = false;
    header: string;
    url: string;
    dark: boolean;
    boxed: boolean;
    collapseSidebar: boolean;
    compactSidebar: boolean;
    isMobileStatus: boolean;
    sidenavMode = 'side';
    popupDeleteResponse: any;
    sidebarColor: any;
    isSidebarFilterClass: string;
    isHeaderFilterClass: string;
    deviceInfo = null;
    private _mediaSubscription: Subscription;
    private _routerEventsSubscription: Subscription;
    private _router: Subscription;
    @ViewChild('sidenav') sidenav;

    constructor(public tourService: TourService,
                public menuItems: MenuItems,
                private breadcrumbService: BreadcrumbService,
                private pageTitleService: PageTitleService,
                public translate: TranslateService,
                private router: Router,
                private media: MediaObserver,
                private deviceService: DeviceDetectorService,
                private authService: AuthService,
                // public ecommerceService: EcommerceService,
                public coreService: CoreService, private routes: Router,
                private activatedRoute: ActivatedRoute) {

        // TODO: Mudar layout para  o padrão horizontal
        this.changeLayout();

        // Carrega o layout em fullscreen
        // this.toggleFullscreen();

        const browserLang: string = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'pt-br');

        this.tourService.initialize([{
            anchorId: 'start.tour',
            content: 'Bem vindo ao sistema Backoffice MBoy!',
            placement: 'below',
            title: 'Bem vindo novamente',
        },
            {
                anchorId: 'tour-search',
                content: 'Desfrutando da caixa de pesquisa com sugestões e muito mais.',
                placement: 'below',
                title: 'Caixa de pesquisa',
            },
            {
                anchorId: 'tour-full-screen',
                content: 'Ao pressionar este botão, você pode alternar para o modo de tela cheia.',
                placement: 'below',
                title: 'tela cheia',
            },
            {
                anchorId: 'tour-ui',
                content: 'Mostre as estatísticas do seu site com cards exclusivos',
                placement: 'below',
                title: 'Estatísticas',
            }]);

        // TODO: Removido o tourService.Start()
        if (window.innerWidth > 959) {
            // this.tourService.start();
        }

        breadcrumbService.addFriendlyNameForRoute('/dashboard', 'Dashboard');
        breadcrumbService.addFriendlyNameForRoute('/dashboard/saas', 'SAAS');
        breadcrumbService.addFriendlyNameForRoute('/dashboard/web-analytics', 'Web Analytics');

        // CADASTRO GERAL DO SISTEMA
        breadcrumbService.addFriendlyNameForRoute('/patients', ''); // Abre a sessão de cadastro de pacientes
        breadcrumbService.addFriendlyNameForRoute('/cidades', ''); // Abre a sessão de cadastro de convenios

    }

    ngOnInit() {
        this.pageTitleService.title.subscribe((val: string) => {
            this.header = val;
        });

        if (localStorage.getItem('SESSAO') != null) {
            this.name = JSON.parse(localStorage.getItem('SESSAO')).name;
            this.image = JSON.parse(localStorage.getItem('SESSAO')).avatar;
        }

        setTimeout(() => {
            if ((this.router.url === '/courses/courses' || this.router.url === '/courses/courses-list' ||
                this.router.url === '/courses/course-detail') && window.innerWidth < 1920) {
                this.coreService.sidenavMode = 'over';
                this.coreService.sidenavOpen = false;
            } else if ((this.router.url === '/ecommerce/shop' || this.router.url === '/ecommerce/checkout' ||
                this.router.url === '/ecommerce/invoice') && window.innerWidth < 1920) {
                this.coreService.sidenavMode = 'over';
                this.coreService.sidenavOpen = false;
            } else if (window.innerWidth > 1280) {
                this.coreService.sidenavMode = 'side';
                this.coreService.sidenavOpen = true;
            }
        }, 10)

        this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
            this.url = event.url;
        });

        if (this.url !== '/session/login' && this.url !== '/session/register' &&
            this.url !== '/session/forgot-password' && this.url !== '/session/lockscreen') {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar-container ')
        }

        this.deviceInfo = this.deviceService.getDeviceInfo();
        if (this.deviceInfo.device === 'ipad' || this.deviceInfo.device === 'iphone' ||
            this.deviceInfo.device === 'android') {
            this.coreService.sidenavMode = 'over';
            this.coreService.sidenavOpen = false;
        }

        this._mediaSubscription = this.media.media$.subscribe((change: MediaChange) => {
            if (this.coreService.horizontalStatus) {
                if (window.innerWidth <= 959) {
                    this.coreService.horizontalSizeStatue = false;
                } else {
                    this.coreService.horizontalSizeStatue = true;
                }
            }
            this.isMobileStatus = (change.mqAlias === 'xs') || (change.mqAlias === 'sm') || (change.mqAlias === 'md');
            this.isMobile = this.isMobileStatus;
            if (this.isMobile || ((this.router.url === '/ecommerce/shop' || this.router.url === '/ecommerce/checkout' ||
                this.router.url === '/ecommerce/invoice' || this.router.url === '/courses/courses' ||
                this.router.url === '/courses/courses-list' || this.router.url === '/courses/course-detail') && window.innerWidth < 1920)) {
                this.coreService.sidenavMode = 'over';
                this.coreService.sidenavOpen = false;
            } else {
                this.coreService.sidenavMode = 'side';
                this.coreService.sidenavOpen = true;
            }
        });

        this._routerEventsSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd && this.isMobile) {
                this.sidenav.close();
            }
        });
    }

    ngOnDestroy() {
        this._router.unsubscribe();
        this._mediaSubscription.unsubscribe();
    }


    /**
     * Como saída (router outlet) emitirá um evento de ativação sempre que um novo componente estiver sendo instanciado.
     */
    onActivate(e, scrollContainer) {
        scrollContainer.scrollTop = 0;
        if ((this.router.url === '/courses/courses' || this.router.url === '/courses/courses-list' ||
            this.router.url === '/courses/course-detail') && window.innerWidth < 1920) {
            this.coreService.sidenavMode = 'over';
            this.coreService.sidenavOpen = false;
        } else if ((this.router.url === '/ecommerce/shop' || this.router.url === '/ecommerce/checkout' ||
            this.router.url === '/ecommerce/invoice') && window.innerWidth < 1920) {
            this.coreService.sidenavMode = 'over';
            this.coreService.sidenavOpen = false;
        } else if (window.innerWidth > 1280) {
            this.coreService.sidenavMode = 'side';
            this.coreService.sidenavOpen = true;
        }
    }

    /**
     * toggleFullscreen method is used to show a template in fullscreen.
     */
    toggleFullscreen() {
        if (screenfull.enabled) {
            screenfull.toggle();
            this.isFullscreen = !this.isFullscreen;
        }
    }

    /**
     * customizerFunction is used to open and close the customizer.
     */
    customizerFunction() {
        this.customizerIn = !this.customizerIn;
    }

    /**
     * addClassOnBody method is used to add a add or remove class on body.
     */
    addClassOnBody(event) {
        const body = document.body;
        if (event.checked) {
            body.classList.add('dark-theme-active');
        } else {
            body.classList.remove('dark-theme-active');
        }
    }

    /**
     * Usado para adicionar de forma dinâmica novos menus
     */
    // addMenuItem(): void {
    //     this.menuItems.add({
    //         state: 'pages',
    //         name: 'GENE MENU',
    //         type: 'sub',
    //         icon: 'trending_flat',
    //         children: [
    //             {state: 'blank', name: 'SUB MENU1'},
    //             {state: 'blank', name: 'SUB MENU2'}
    //         ]
    //     });
    // }

    /**
     * changeRTL method is used to change the layout of template.
     */
    changeRTL(isChecked) {
        if (isChecked) {
            this.layout = 'rtl'
        } else {
            this.layout = 'ltr'
        }
    }

    /**
     * toggleSidebar method is used a toggle a side nav bar.
     */
    toggleSidebar() {
        this.coreService.sidenavOpen = !this.coreService.sidenavOpen;
    }

    /**
     * logOut method is used to log out the  template.
     */
    // logOut() {
    //     this.authService.logOut();
    // }

    /**
     * onDelete function is used to open the delete dialog.
     */
   // onDelete(cart) {
        // this.ecommerceService.deleteDialog('Are you sure you want to delete this product permanently?')
        //     .subscribe(res => {
        //             this.popupDeleteResponse = res
        //         },
        //         err => console.log(err),
        //         () => this.getPopupDeleteResponse(this.popupDeleteResponse, cart)
        //     );
    // }

    /**
     * getPopupDeleteResponse is used to delete the cart item when reponse is yes.
     */
    getPopupDeleteResponse(response: any, cart) {
        if (response === 'yes') {
            // this.ecommerceService.localStorageDelete(cart, 'cartProduct');
        }
    }

    /**
     * sidebarFilter function filter the color for header section.
     */
    sidebarFilter(selectedFilter) {
        document.getElementById('main-app').classList.remove('sidebar-color-dark');
        this.isSidebarFilterClass = selectedFilter.colorSelect;
        document.querySelector('.radius-circle').classList.remove('radius-circle');
        document.getElementById(selectedFilter.sideBarSelect).classList.add('radius-circle');
    }

    /**
     * sidebarFilter function filter the color for header section.
     */
    headerFilter(selectedFilter) {
        document.getElementById('main-app').classList.remove('header-color-dark');
        this.isHeaderFilterClass = selectedFilter.colorSelect;
        document.querySelector('.radius-active').classList.remove('radius-active');
        document.getElementById(selectedFilter.headerSelect).classList.add('radius-active');
    }

    // /**
    //  *chatMenu method is used to toggle a chat menu list.
    //  */
    // chatMenu() {
    //     document.getElementById('gene-chat').classList.toggle('show-chat-list');
    // }
    //
    // /**
    //  * onChatOpen method is used to open a chat window.
    //  */
    // onChatOpen() {
    //     document.getElementById('chat-open').classList.toggle('show-chat-window');
    // }
    //
    // /**
    //  * onChatWindowClose method is used to close the chat window.
    //  */
    // chatWindowClose() {
    //     document.getElementById('chat-open').classList.remove('show-chat-window');
    // }

    /**
     * O método changeLayout é usado para alterar o layout vertical para o layout horizontal.
     */
    changeLayout() {
        this.coreService.horizontalStatus = false;
        if (window.innerWidth <= 959) {
            this.coreService.horizontalSizeStatue = true;
        } else {
            this.coreService.horizontalSizeStatue = false;
        }
    }
}


