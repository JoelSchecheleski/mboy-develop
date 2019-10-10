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
        name: 'Alterar menu',
        type: 'button',
        icon: '',
        active: true,
        children: []
    },
    // ================================== MENUT ITENS MAIN-MATERIAL ===============================
    {
        state: 'general',
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
            }
        ]
    }
];

@Injectable()
export class MenuItems {
    getAll(): Menu[] {
        // const acesso = JSON.parse(localStorage.getItem('infoUsuarioLogado'))[0].acessos;
        const menus = MENUITEMS;
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
        return menus;
        // return MENUITEMS;
    }

    // add(menu: any) {
    //     MENUITEMS.push(menu);
    // }
}
