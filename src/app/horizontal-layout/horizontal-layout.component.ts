import {filter} from 'rxjs/operators';
import {Component, OnInit, ViewChild, HostListener, ViewEncapsulation} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router, ActivatedRoute} from '@angular/router';
import {TourService} from 'ngx-tour-md-menu';
import {AuthService} from '../service/auth-service/auth.service';
// import {EcommerceService} from '../service/ecommerce/ecommerce.service';
import {CoreService} from '../service/core/core.service';
import {HorizontalMenuItems} from '../core/menu/horizontal-menu-items/horizontal-menu-items';

const screenfull = require('screenfull');

@Component({
    selector: 'ms-horizontal-layout',
    templateUrl: './horizontal-layout.component.html',
    styleUrls: ['./horizontal-layout.component.scss']
})
export class HorizontalLayoutComponent implements OnInit {

    root = 'ltr';
    currentLang = 'pt-br';
    dark: boolean;
    boxed: boolean;
    compactSidebar: boolean;
    customizerIn = false;
    chatpanelOpen =  false;
    isFullscreen = false;
    showSettings = false;
    header: string;
    layout: any = 'ltr';
    popupDeleteResponse: any;

    chatList: any [] = [
        {
            image: 'assets/img/user-1.jpg',
            name: 'John Smith',
            chat: 'Lorem ipsum simply dummy',
            mode: 'online'
        },
        {
            image: 'assets/img/user-2.jpg',
            name: 'Amanda Brown',
            chat: 'Lorem ipsum simply dummy',
            mode: 'online'
        }
    ]

    constructor(public tourService: TourService,
                public menuItems: HorizontalMenuItems,
                public translate: TranslateService,
                private router: Router,
                private authService: AuthService,
                private coreService: CoreService,
                private activateRoute: ActivatedRoute) {

        const browserLang: string = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'pt-br');

        // Tour pelo sistema
        this.tourService.initialize([{
            anchorId: 'start.tour',
            content: 'Bem vindo ao backOffice MBoy!',
            placement: 'below',
            title: 'Bem vindo!',
        },
            {
                anchorId: 'tour-search',
                content: 'Enjoying Search box with sugestion and many more things',
                placement: 'below',
                title: 'Search Box',
            },
            {
                anchorId: 'tour-full-screen',
                content: 'By pressing this button you can switch to fullscreen mode.',
                placement: 'below',
                title: 'Full Screen',
            },
            {
                anchorId: 'tour-ui',
                content: 'Show your site stats with unique designed cards',
                placement: 'below',
                title: 'Stats Cards',
            }]);

        if (window.innerWidth > 959) {
            this.tourService.start();
        }
    }

    ngOnInit() {
    }

    /**
     *As router outlet will emit an activate event any time a new component is being instantiated.
     */
    onActivate(e, scrollContainer) {
        scrollContainer.scrollTop = 0;
        // tslint:disable-next-line:max-line-length
        if ((this.router.url === '/courses/courses' || this.router.url === '/courses/courses-list' || this.router.url === '/courses/course-detail') && window.innerWidth < 1920) {
            this.coreService.sidenavMode = 'over';
            this.coreService.sidenavOpen = false;
        } else {
            if (window.innerWidth > 1280) {
                this.coreService.sidenavMode = 'side';
                this.coreService.sidenavOpen = true;
            }
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
     * logOut method is used to log out the template.
     */
    logOut() {
        this.authService.logOut();
    }

    /**
     * onDelete function is used to open the delete dialog.
     */
    onDelete(cart) {
        // this.ecommerceService.deleteDialog('Are you sure you want to delete this product permanently?')
        //     .subscribe(res => {
        //             this.popupDeleteResponse = res
        //         },
        //     );
    }

    /**
     * getPopupDeleteResponse is used to delete the cart item when reponse is yes.
     */
    getPopupDeleteResponse(response: any, cart) {
        // tslint:disable-next-line:triple-equals
        if (response == 'yes') {
            // this.ecommerceService.localStorageDelete(cart, 'cartProduct');
        }
    }

    /**
     * changeLayout method is used to change the layout of menu items.
     */
    changeLayout() {
        this.coreService.horizontalStatus = false;
        this.coreService.horizontalSizeStatue = false;
    }

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
     *chatMenu method is used to toggle a chat menu list.
     */
    chatMenu() {
        document.getElementById('gene-chat').classList.toggle('show-chat-list');
    }

    /**
     * onChatOpen method is used to open a chat window.
     */
    onChatOpen() {
        document.getElementById('chat-open').classList.toggle('show-chat-window');
    }

    /**
     * onChatWindowClose method is used to close the chat window.
     */
    chatWindowClose() {
        document.getElementById('chat-open').classList.remove('show-chat-window');
    }
}


