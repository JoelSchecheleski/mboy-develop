import {Injectable} from '@angular/core';

export interface ChildrenItems {
    state: string;
    name: string;
    type?: string;
    active?: boolean;
}

export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
    active?: boolean;
    children?: ChildrenItems[];
}

const MENUITEMS = [
    {
        state: 'horizontal',
        name: 'TOP MENU',
        type: 'button',
        icon: 'horizontal_split',
        label: 'New'
    },
    {
        state: 'dashboard',
        name: 'DASHBOARD',
        type: 'sub',
        icon: 'explore',
        active: true,
        children: [
            {state: 'saas', name: 'SAAS', active: true},
            {state: 'web-analytics', name: 'WEB ANALYTICS', active: true},
        ]
    },

    // TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE
    // {
    //     state: 'patients',
    //     name: 'patients',
    //     type: 'link',
    //     icon: 'date_range',
    //     active: true
    // },
    // {
    //     state: 'convenios',
    //     name: 'convenios',
    //     type: 'link',
    //     icon: 'date_range',
    //     active: true
    // },
    // FIM TESTE FIM TESTE FIM TESTE FIM TESTE FIM TESTE FIM TESTE FIM TESTE FIM TESTE FIM TESTE FIM TESTE FIM TESTE FIM

    {
        state: 'courses',
        name: 'COURSES',
        type: 'sub',
        icon: 'book',
        label: 'New',
        active: true,
        children: [
            {state: 'courses', name: 'COURSES', active: true},
            {state: 'courses-list', name: 'COURSES LIST', active: true},
            {state: 'course-detail', name: 'COURSE DETAIL', active: true},
            {state: 'signin', name: 'SIGN IN', active: true},
            {state: 'payment', name: 'PAYMENT', active: true}
        ]
    },
    {
        state: 'ecommerce',
        name: 'E-COMMERCE',
        type: 'sub',
        icon: 'explore',
        label: 'New',
        active: true,
        children: [
            {state: 'shop', name: 'SHOP', active: true},
            {state: 'cart', name: 'CART', active: true},
            {state: 'checkout', name: 'CHECKOUT', active: true},
            {state: 'cards', name: 'CARDS', active: true},
            {state: 'invoice', name: 'INVOICE', active: true},
        ]
    },
    // {
    //     state: 'pages',
    //     name: 'PAGES',
    //     type: 'sub',
    //     icon: 'import_contacts',
    //     label: 'New',
    //     active: true,
    //     children: [
    //         {state: 'media', name: 'GALLERY', active: true},
    //         {state: 'mediaV2', name: 'GALLERY V2', label: 'New', active: true},
    //         {state: 'pricing', name: 'PRICING', active: true},
    //         {state: 'pricing-1', name: 'PRICING V2', label: 'New', active: true},
    //         {state: 'blank', name: 'BLANK', active: true},
    //         {state: 'timeline', name: 'TIMELINE', label: 'New', active: true},
    //         {state: 'faq', name: 'FAQ', label: 'New', active: true},
    //         {state: 'feedback', name: 'FEEDBACK', label: 'New', active: true},
    //         {state: 'about', name: 'ABOUT', label: 'New', active: true},
    //         {state: 'contact', name: 'CONTACT', label: 'New', active: true},
    //         {state: 'search', name: 'SEARCH', label: 'New', active: true},
    //         {state: 'comingsoon', name: 'COMING SOON', label: 'New', active: true},
    //         {state: 'maintenance', name: 'MAINTENANCE', label: 'New', active: true},
    //     ]
    // },
    {
        state: 'user-management',
        name: 'MANAGEMENT',
        type: 'sub',
        icon: 'view_list',
        label: 'New',
        active: true,
        children: [
            {state: 'usermanagelist', name: 'USER LIST', active: true},
            {state: 'usergridlist', name: 'USER GRID', active: true}
        ]
    },

    {
        state: 'users',
        name: 'USERS',
        type: 'sub',
        icon: 'web',
        label: 'New',
        active: true,
        children: [
            {state: 'userlist', name: 'USER LIST', active: true},
            {state: 'userprofile', name: 'USER PROFILE', active: true},
            {state: 'userprofilev2', name: 'USER PROFILE V2', label: 'New', active: true}
        ]
    },

    {
        state: 'session',
        name: 'SESSIONS',
        type: 'sub',
        icon: 'face',
        label: 'New',
        active: true,
        children: [
            {state: 'login', name: 'LOGIN', active: true},
            {state: 'loginV2', name: 'LOGIN V2', label: 'New', active: true},
            {state: 'register', name: 'REGISTER', active: true},
            {state: 'registerV2', name: 'REGISTER V2', label: 'New', active: true},
            {state: 'forgot-password', name: 'FORGOT', active: true},
            {state: 'forgot-passwordV2', name: 'FORGOT V2', label: 'New', active: true},
            {state: 'lockscreen', name: 'LOCKSCREEN', active: true},
            {state: 'lockscreenV2', name: 'LOCKSCREEN V2', label: 'New', active: true}
        ]
    },
    {
        state: 'video-player',
        name: 'VIDEO PLAYER',
        type: 'link',
        icon: 'videocam',
        label: 'New',
        active: true
    },
    {
        state: 'taskboard',
        name: 'TASK BOARD',
        type: 'link',
        icon: 'drag_indicator',
        label: 'New',
        active: true
    },
    {
        state: 'inbox',
        name: 'INBOX',
        type: 'link',
        icon: 'mail',
        active: true
    },
    {
        state: 'chat',
        name: 'CHAT',
        type: 'link',
        icon: 'chat',
        active: true
    },
    {
        state: 'calendar',
        name: 'CALENDAR',
        type: 'link',
        icon: 'date_range',
        active: true
    },

    {
        state: 'editor',
        name: 'EDITOR',
        type: 'sub',
        icon: 'format_shapes',
        active: true,
        children: [
            {state: 'wysiwyg', name: 'WYSIWYG EDITOR', active: true},
            {state: 'ckeditor', name: 'CKEDITOR', active: true},
        ]
    },
    {
        state: 'icons',
        name: 'MATERIAL ICONS',
        type: 'link',
        icon: 'grade',
        active: true
    },
    {
        state: 'chart',
        name: 'CHARTS',
        type: 'sub',
        icon: 'show_chart',
        active: true,
        children: [
            {state: 'ng2-charts', name: 'NG2 CHARTS', active: true},
            {state: 'easy-pie-chart', name: 'EASY PIE', active: true},
        ]
    },
    {
        state: 'components',
        name: 'COMPONENTS',
        type: 'sub',
        icon: 'layers',
        active: true,
        children: [
            {state: 'buttons', name: 'BUTTONS', active: true},
            {state: 'cards', name: 'CARDS', active: true},
            {state: 'grid', name: 'GRID', active: true},
            {state: 'list', name: 'LIST', active: true},
            {state: 'menu', name: 'MENU', active: true},
            {state: 'slider', name: 'SLIDER', active: true},
            {state: 'snackbar', name: 'SNACKBAR', active: true},
            {state: 'tooltip', name: 'TOOLTIP', active: true},
            {state: 'dialog', name: 'DIALOG', active: true},
            {state: 'select', name: 'SELECT', active: true},
            {state: 'input', name: 'INPUT', active: true},
            {state: 'checkbox', name: 'CHECKBOX', active: true},
            {state: 'radio', name: 'RADIO', active: true},
            {state: 'toolbar', name: 'TOOLBAR', active: true},
            {state: 'progress', name: 'PROGRESS', active: true},
            {state: 'tabs', name: 'TABS', active: true},
            {state: 'colorpicker', name: 'COLORPICKER', active: true},
            {state: 'datepicker', name: 'DATEPICKER', active: true},
        ]
    },
    {
        state: 'dragndrop',
        name: 'DRAG & DROP',
        type: 'sub',
        icon: 'mouse',
        active: true,
        children: [
            {state: 'dragula', name: 'DRAGULA', active: true},
            {state: 'sortable', name: 'SORTABLEJS', active: true}
        ]
    },
    {
        state: 'tables',
        name: 'TABLES',
        type: 'sub',
        icon: 'format_line_spacing',
        active: true,
        children: [
            {state: 'fullscreen', name: 'FULLSCREEN', active: true},
            {state: 'selection', name: 'SELECTION', active: true},
            {state: 'pinning', name: 'PINNING', active: true},
            {state: 'sorting', name: 'SORTING', active: true},
            {state: 'paging', name: 'PAGING', active: true},
            {state: 'editing', name: 'EDITING', active: true},
            {state: 'filter', name: 'FILTER', active: true},
            {state: 'responsive', name: 'RESPONSIVE', active: true}
        ]
    },
    {
        state: 'forms',
        name: 'FORMS',
        type: 'sub',
        icon: 'insert_comment',
        active: true,
        children: [
            {state: 'form-wizard', name: 'FORM WIZARD', active: true},
            {state: 'form-validation', name: 'FORM VALIDATION', active: true},
            {state: 'form-upload', name: 'UPLOAD', active: true},
            {state: 'form-tree', name: 'TREE', active: true}
        ]
    },
    {
        state: 'maps',
        name: 'MAPS',
        type: 'sub',
        icon: 'map',
        active: true,
        children: [
            {state: 'googlemap', name: 'GOOGLE MAP', active: true},
            {state: 'leafletmap', name: 'LEAFLET MAP', active: true}
        ]
    },


];

@Injectable()
export class MenuItems {
    getAll(): Menu[] {

        // const acesso = JSON.parse(localStorage.getItem('infoUsuarioLogado'))[0].acessos;
        // const menus = MENUITEMS;
        // acesso.forEach(a => {
        //   a.telas.forEach(b => {
        //     menus.forEach(e => {
        //       e.main.forEach(d => {
        //         if (b.componentModulo == d.state) {
        //           d.active = true;
        //           d.children.forEach(f => {
        //             if (b.componentTela == f.state) {
        //               f.active = true;
        //             }
        //           });
        //         }
        //       });
        //     });
        //   });
        // });
        // return menus;

        return MENUITEMS;

    }

    add(menu: any) {
        MENUITEMS.push(menu);
    }
}
