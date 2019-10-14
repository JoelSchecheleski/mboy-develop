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
        state: '',
        name: 'General',
        type: 'sub',
        class: 'group-title',
        icon: 'date_range',
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
                state: 'cidades', // Cadastro de cidades
                name: 'cidades',
                type: 'link',
                icon: 'date_range',
                active: true
            }
        ]
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
