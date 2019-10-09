import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ModnotaComponent} from './modnota.component';

const routes: Routes = [
    {
        path: '',
        component: ModnotaComponent,

        data: {
            title: 'Modelo de notas fiscais',
            icon: 'ti-home',
            caption: 'Modelo de notas fiscais',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModnotaRoutingModule {}

