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
    // ================================== MENUT ITENS MAIN-MATERIAL ===============================
    {
        state: 'pessoas',
        name: 'Peoples',
        type: 'sub',
        class: 'group-title',
        icon: 'people',
        active: true,
        children: [
            {
                state: 'user',
                name: 'Users',
                type: 'link',
                icon: 'user',
                active: true
            },
            // {
            //     state: 'motoboys',
            //     name: 'Motoboys',
            //     type: 'link',
            //     icon: '',
            //     active: true
            // },
            // {
            //     state: 'empresas',
            //     name: 'Empresas',
            //     type: 'link',
            //     icon: 'store',
            //     active: true
            // },
            // {
            //     state: 'clientes',
            //     name: 'Clientes',
            //     type: 'link',
            //     icon: '',
            //     active: true
            // },
        ]
    },
    {
        state: 'cidades',
        name: 'Cities',
        type: 'link',
        icon: 'room'
    }
    // , {
    //     state: 'Valores',
    //     name: 'Values',
    //     type: 'link',
    //     icon: 'attach_money'
    // },
    // {
    //     state: 'Reclamações',
    //     name: 'Claims',
    //     type: 'link',
    //     icon: 'sentiment_very_dissatisfied'
    // },
    // {
    //     state: 'Sorteios',
    //     name: 'Sweepstakes',
    //     type: 'link',
    //     icon: 'insert_emoticon'
    // },
    // {
    //     state: 'pushs',
    //     name: 'Push trigger',
    //     type: 'link',
    //     icon: 'add_to_home_screen'
    // },
    // {
    //     state: 'Sair',
    //     name: 'Get out',
    //     type: 'link',
    //     icon: 'meeting_room'
    // }
];

@Injectable()
export class MenuItems {
    getAll(): Menu[] {
        return MENUITEMS;
    }
}
