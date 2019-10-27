import { Routes } from '@angular/router';

// import { LoginComponent } from './login/login.component';
import { ForgotPasswordV2Component } from './forgot-passwordV2/forgot-passwordV2.component';
import { LoginV2Component } from './loginV2/loginV2.component';

export const SessionRoutes: Routes = [
   {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
   },
   {
      path: '',
      children: [
          {
            path: 'loginV2',
            component: LoginV2Component
         },
         {
            path: 'forgot-passwordV2',
            component: ForgotPasswordV2Component
         }
      ]
   }
];
