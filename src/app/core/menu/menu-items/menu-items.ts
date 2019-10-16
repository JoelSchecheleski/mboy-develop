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
        name: 'pessoas',
        type: 'sub',
        class: 'group-title',
        icon: 'people',
        active: true,
        children: [
            {
                state: 'user',
                name: 'Usuários',
                type: 'link',
                icon: 'user',
                active: true
            },
            {
                state: 'customer',
                name: 'Clientes',
                type: 'link',
                icon: 'user',
                active: true
            },
            {
                state: 'motoboy',
                name: 'Motoboy',
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
        name: 'Cidades',
        type: 'link',
        icon: 'room'
    }
    // , {
    //     state: 'Valores',
    //     name: 'Valores',
    //     type: 'link',
    //     icon: 'attach_money'
    // },
    // {
    //     state: 'Reclamações',
    //     name: 'Reclamações',
    //     type: 'link',
    //     icon: 'sentiment_very_dissatisfied'
    // },
    // {
    //     state: 'Sorteios',
    //     name: 'Sorteios',
    //     type: 'link',
    //     icon: 'insert_emoticon'
    // },
    // {
    //     state: 'pushs',
    //     name: 'Disparo de pushs',
    //     type: 'link',
    //     icon: 'add_to_home_screen'
    // },
    // {
    //     state: 'Sair',
    //     name: 'Sair',
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
