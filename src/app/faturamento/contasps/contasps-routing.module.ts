import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ContaspsComponent} from './contasps.component';

const routes: Routes = [
    {
        path: '',
        component: ContaspsComponent,

        data: {
            title: 'Contas do pronto socorro',
            icon: 'ti-home',
            caption: 'Contas do pronto socorro',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContaspsRoutingModule {}

