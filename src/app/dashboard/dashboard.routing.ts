import {Routes} from '@angular/router';

import {SaasComponent} from './saas/saas.component';
import {WebAnalyticsComponent} from './web-analytics/webanalytics.component';

export const DashboardRoutes: Routes = [
        {
            path: '',
            redirectTo: 'saas',
            pathMatch: 'full'
        },
        {
            path: '',
            children: [
                {
                    path: 'saas',
                    component: SaasComponent
                },
                {
                    path: 'web-analytics',
                    component:
                    WebAnalyticsComponent
                }
            ]
        }
    ]
;
