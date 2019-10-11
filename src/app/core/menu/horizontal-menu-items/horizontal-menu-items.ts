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
        state: 'vertical',
        name: 'Menu lateral',
        type: 'button',
        icon: ''
    },

    // ================================== GERAL ===============================
    {
        name: 'General',
        type: 'sub',
        class: 'group-title',
        icon: '',
        active: true,
        children: [
            {
                state: 'chat',
                name: 'CHAT',
                type: 'link',
                icon: 'chat',
                active: true
            },
            {
                state: 'patients', // Cadastro de Pacientes
                name: 'patients',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'cidades', // Cadastro de Cidades
                name: 'cidades',
                type: 'link',
                icon: 'date_range',
                active: true
            }
        ]
    },
    {
        name: 'Components',
        type: 'sub',
        class: 'group-title',
        icon: '',
        active: true,
        children: [
            {
                state: 'editor',
                name: 'EDITOR',
                type: 'subChild',
                icon: 'format_shapes',
                active: true,
                children: [
                    {state: 'wysiwyg', type: 'link', name: 'WYSIWYG EDITOR', active: true},
                    {state: 'ckeditor', type: 'link', name: 'CKEDITOR', active: true}
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
                type: 'subChild',
                icon: 'show_chart',
                active: true,
                children: [
                    {state: 'ng2-charts', type: 'link', name: 'NG2 CHARTS', active: true},
                    {state: 'easy-pie-chart', type: 'link', name: 'EASY PIE', active: true}
                ]
            },
            {
                state: 'taskboard',
                name: 'TASK BOARD',
                type: 'link',
                icon: 'drag_indicator',
                active: true
            }
        ]
    },
    {
        name: 'UI Elements',
        type: 'sub',
        class: 'group-title',
        mega: true,
        showColumns: 'show-column-4',
        icon: '',
        active: true,
        children: [
            {
                state: 'components',
                name: 'UI COMPONENTS',
                type: 'subChild',
                icon: 'layers',
                active: true,
                children: [
                    {state: 'cards', type: 'link', name: 'CARDS', active: true},
                    {state: 'grid', type: 'link', name: 'GRID', active: true},
                    {state: 'list', type: 'link', name: 'LIST', active: true},
                    {state: 'menu', type: 'link', name: 'MENU', active: true},
                    {state: 'slider', type: 'link', name: 'SLIDER', active: true},
                    {state: 'snackbar', type: 'link', name: 'SNACKBAR', active: true},
                    {state: 'tooltip', type: 'link', name: 'TOOLTIP', active: true},
                    {state: 'dialog', type: 'link', name: 'DIALOG', active: true},
                    {state: 'toolbar', type: 'link', name: 'TOOLBAR', active: true},
                    {state: 'progress', type: 'link', name: 'PROGRESS', active: true},
                    {state: 'tabs', type: 'link', name: 'TABS', active: true},
                    {state: 'colorpicker', type: 'link', name: 'COLORPICKER', active: true},
                    {state: 'datepicker', type: 'link', name: 'DATEPICKER', active: true}
                ]
            },
            {
                state: 'components',
                name: 'FORM COMPONENTS',
                type: 'subChild',
                icon: 'layers',
                active: true,
                children: [
                    {state: 'buttons', type: 'link', name: 'BUTTONS', active: true},
                    {state: 'select', type: 'link', name: 'SELECT', active: true},
                    {state: 'input', type: 'link', name: 'INPUT', active: true},
                    {state: 'checkbox', type: 'link', name: 'CHECKBOX', active: true},
                    {state: 'radio', type: 'link', name: 'RADIO', active: true}
                ]
            },
            {
                state: 'dragndrop',
                name: 'DRAG & DROP',
                type: 'subChild',
                icon: 'mouse',
                active: true,
                children: [
                    {state: 'dragula', type: 'link', name: 'DRAGULA', active: true},
                    {state: 'sortable', type: 'link', name: 'SORTABLEJS', active: true}
                ]
            },
            {
                state: 'tables',
                name: 'TABLES',
                type: 'subChild',
                icon: 'format_line_spacing',
                active: true,
                children: [
                    {state: 'fullscreen', type: 'link', name: 'FULLSCREEN', active: true},
                    {state: 'selection', type: 'link', name: 'SELECTION', active: true},
                    {state: 'pinning', type: 'link', name: 'PINNING', active: true},
                    {state: 'sorting', type: 'link', name: 'SORTING', active: true},
                    {state: 'paging', type: 'link', name: 'PAGING', active: true},
                    {state: 'editing', type: 'link', name: 'EDITING', active: true},
                    {state: 'filter', type: 'link', name: 'FILTER', active: true},
                    {state: 'responsive', type: 'link', name: 'RESPONSIVE', active: true}
                ]
            },
            {
                state: 'chart',
                name: 'CHARTS',
                type: 'subChild',
                icon: 'show_chart',
                active: true,
                children: [
                    {state: 'ng2-charts', type: 'link', name: 'NG2 CHARTS', active: true},
                    {state: 'easy-pie-chart', type: 'link', name: 'EASY PIE', active: true},
                ]
            },
            {
                state: 'forms',
                name: 'FORMS',
                type: 'subChild',
                icon: 'insert_comment',
                active: true,
                children: [
                    {state: 'form-wizard', type: 'link', name: 'FORM WIZARD', active: true},
                    {state: 'form-validation', type: 'link', name: 'FORM VALIDATION', active: true},
                    {state: 'form-upload', type: 'link', name: 'UPLOAD', active: true},
                    {state: 'form-tree', type: 'link', name: 'TREE', active: true}
                ]
            },
            {
                state: 'maps',
                name: 'MAPS',
                type: 'subChild',
                icon: 'map',
                active: true,
                children: [
                    {state: 'googlemap', type: 'link', name: 'GOOGLE MAP', active: true},
                    {state: 'leafletmap', type: 'link', name: 'LEAFLET MAP', active: true}
                ]
            },
            {
                state: 'video-player',
                name: 'VIDEO PLAYER',
                type: 'link',
                icon: 'videocam',
                active: true
            },
        ]
    }
];

@Injectable()
export class HorizontalMenuItems {
    getAll() {

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
}
