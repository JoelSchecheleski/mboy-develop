import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HorizontalLayoutComponent} from './horizontal-layout/horizontal-layout.component';
import {MainComponent} from './main/main.component';
import {CommingsoonComponent} from './pages/commingsoon/commingsoon.component';
import {MaintenanceComponent} from './pages/maintenance/maintenance.component';
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
             {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},

            {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
            {path: 'icons', loadChildren: './material-icons/material-icons.module#MaterialIconsModule'},
            {path: 'components', loadChildren: './components/components.module#ComponentsModule'},
            {path: 'users', loadChildren: './users/users.module#UsersModule'},

            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', loadChildren: './components/components.module#ComponentsModule'},

            // Carrega todos os componentes dos cadastros gerais da aplicação
            {path: '', loadChildren: './cadastrogeral/cadastrogeral.module#CadastrogeralModule'},

        ]
    },
    {
        path: 'session',
        loadChildren: './session/session.module#SessionModule',
    },
    {
        path: 'pages/comingsoon',
        component: CommingsoonComponent
    },
    {
        path: 'pages/maintenance',
        component: MaintenanceComponent
    },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule {
}
