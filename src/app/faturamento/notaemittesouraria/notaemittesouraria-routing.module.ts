import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {NotaemittesourariaComponent} from './notaemittesouraria.component';

const routes: Routes = [
    {
        path: '',
        component: NotaemittesourariaComponent,

        data: {
            title: 'Notas fiscais emitidas pela tesouraria',
            icon: 'ti-home',
            caption: 'Notas fiscais emitidas pela tesouraria',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotaemittesourariaRoutingModule {}

