import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {IntersusComponent} from './intersus.component';

const routes: Routes = [
    {
        path: '',
        component: IntersusComponent,

        data: {
            title: 'Valores procedimentos intersus',
            icon: 'ti-home',
            caption: 'Valores procedimentos intersus',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IntersusRoutingModule {}
