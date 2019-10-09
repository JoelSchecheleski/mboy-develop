import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {EcgComponent} from './ecg.component';

const routes: Routes = [
    {
        path: '',
        component: EcgComponent,

        data: {
            title: 'Laudo ECG',
            icon: 'ti-home',
            caption: 'Laudo ECG',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EcgRoutingModule {}
