import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HorizontalLayoutComponent} from './horizontal-layout/horizontal-layout.component';
import {MainComponent} from './main/main.component';
import {AuthGuard} from './core/guards/auth.guard';

const appRoutes: Routes = [
    // {
    //     //     path: '',
    //     //     redirectTo: 'dashboard',
    //     //     pathMatch: 'full',
    //     // },
    {
        path: '',
        component: MainComponent,

        canActivate: [AuthGuard],
        runGuardsAndResolvers: 'always',
        children: [
            // Carrega todos os componentes dos cadastros gerais da aplicação
            {path: '', loadChildren: './cadastrogeral/cadastrogeral.module#CadastrogeralModule'},

        ]
    },
    {
        path: 'session',
        loadChildren: './session/session.module#SessionModule',
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule {

}
