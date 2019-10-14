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
    // {
    //     state: 'vertical',
    //     name: 'Menu horizontal',
    //     type: 'button',
    //     icon: '',
    //     active: true,
    //     children: []
    // },
    // {
    //     state: 'vertical',
    //     state: 'vertical',
    //     name: 'Menu lateral',
    //     type: 'button',
    //     icon: ''
    // },
    // ================================== MENUT ITENS MAIN-MATERIAL ===============================
    {
        state: 'Pessoas',
        name: 'Pessoas',
        type: 'sub',
        class: 'group-title',
        icon: 'people',
        active: true,
        children: [
            {
                state: 'usuarios',
                name: 'Usuários',
                type: 'link',
                icon: 'user',
                active: true
            },
            {
                state: 'motoboys',
                name: 'Motoboys',
                type: 'link',
                icon: '',
                active: true
            },
            {
                state: 'empresas',
                name: 'Empresas',
                type: 'link',
                icon: 'store',
                active: true
            },
            {
                state: 'clientes',
                name: 'Clientes',
                type: 'link',
                icon: '',
                active: true
            },
            {
                state: 'user', // Cadastro de Pacientes
                name: 'patients',
                type: 'link',
                icon: 'user',
                active: true
            }
        ]
    },
    {
        state: 'cidades',
        name: 'Cidades',
        type: 'link',
        icon: 'room'
    },
    {
        state: 'Valores',
        name: 'Valores',
        type: 'link',
        icon: 'attach_money'
    },
    {
        state: 'Reclamações',
        name: 'Reclamações',
        type: 'link',
        icon: 'sentiment_very_dissatisfied'
    },
    {
        state: 'Sorteios',
        name: 'Sorteios',
        type: 'link',
        icon: 'insert_emoticon'
    },
    {
        state: 'pushs',
        name: 'Disparo de pushs',
        type: 'link',
        icon: 'add_to_home_screen'
    },
    {
        state: 'Sair',
        name: 'Sair',
        type: 'link',
        icon: 'meeting_room'
    }
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
        return MENUITEMS;
    }

    // add(menu: any) {
    //     MENUITEMS.push(menu);
    // }
}
