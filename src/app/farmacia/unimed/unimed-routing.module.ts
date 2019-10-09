import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {UnimedComponent} from './unimed.component';

const routes: Routes = [
    {
        path: '',
        component: UnimedComponent,

        data: {
            title: 'Unidade de medida',
            icon: 'ti-home',
            caption: 'Unidade de medida',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UnimedRoutingModule {}

