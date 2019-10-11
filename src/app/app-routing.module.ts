import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HorizontalLayoutComponent} from './horizontal-layout/horizontal-layout.component';
import {MainComponent} from './main/main.component';
import {CommingsoonComponent} from './pages/commingsoon/commingsoon.component';
import {MaintenanceComponent} from './pages/maintenance/maintenance.component';
import {AuthGuard} from './core/guards/auth.guard';

const appRoutes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'dashboard',
    //     pathMatch: 'full',
    // },
    {
        path: '',
        component: MainComponent,

        canActivate: [AuthGuard],
        runGuardsAndResolvers: 'always',
        children: [
            {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},

            {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
            {path: 'inbox', loadChildren: './inbox/inbox.module#InboxModule'},
            {path: 'chat', loadChildren: './chat/chat.module#ChatModule'},
            {path: 'calendar', loadChildren: './calendar/calendar.module#Calendar_Module'},
            {path: 'editor', loadChildren: './editor/editor.module#EditorModule'},
            {path: 'icons', loadChildren: './material-icons/material-icons.module#MaterialIconsModule'},
            {path: 'components', loadChildren: './components/components.module#ComponentsModule'},
            {path: 'tables', loadChildren: './tables/tables.module#TablesModule'},
            {path: 'forms', loadChildren: './forms/forms.module#FormModule'},
            {path: 'users', loadChildren: './users/users.module#UsersModule'},
            {path: 'taskboard', loadChildren: './task-board/task-board.module#TaskBoardModule'},
            {path: 'user-management', loadChildren: './user-management/user-management.module#UserManagementModule'},

            // Carrega todos os componentes dos cadastros gerais da aplicação
            {path: '', loadChildren: './cadastrogeral/cadastrogeral.module#CadastrogeralModule'},

            // Carrega todos os componentes do módulo do pronto socorro
             // {path: '', loadChildren: './cidades/cidades.module#CidadesModule'},

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
