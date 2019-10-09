import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ProtocolosComponent} from './protocolos.component';


const routes: Routes = [
    {
        path: '',
        component: ProtocolosComponent,

        data: {
            title: 'Protocolos',
            icon: 'ti-home',
            caption: 'Protocolos',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProtocolosRoutingModule {}
