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
                name: 'Administradores',
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
                name: 'Motoboys',
                type: 'link',
                icon: 'user',
                active: true
            },
            {
                state: 'company',
                name: 'Empresas',
                type: 'link',
                icon: 'user',
                active: true
            }
        ]
    },
    {
        state: 'cidades',
        name: 'Cities',
        type: 'link',
        icon: 'room'
    },
    {
        state: 'sweepstakes',
        name: 'Sweepstakes',
        type: 'link',
        icon: 'sorteios'
    },
    {
        state: 'values',
        name: 'Valores',
        type: 'sub',
        class: 'group-title',
        icon: 'valores',
        active: true,
        children: [
            {
                state: 'config',
                name: 'Configuração',
                type: 'link',
                icon: 'user',
                active: true
            },
            {
                state: 'tablekm',
                name: 'Tabela por KM',
                type: 'link',
                icon: 'user',
                active: true
            },
            {
                state: 'tablehour',
                name: 'Tabela por hora',
                type: 'link',
                icon: 'user',
                active: true
            }
        ]
    }
];

@Injectable()
export class MenuItems {
    getAll(): Menu[] {
        return MENUITEMS;
    }
}
