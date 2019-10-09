import { Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { CourseListComponent } from './course-list/course-list.component';
import { PaymentComponent } from './payment/payment.component';
import { SigninComponent } from './signin/signin.component';

export const CoursesRoutes: Routes = [
   {
      path: '',
      component:  CoursesComponent
   },
   {
      path: '',
      children: [
         {
            path: 'courses',
            component:  CoursesComponent
         },
			{
            path: 'course-detail',
            component:  CoursesDetailComponent
         },			
			{
            path: 'courses-list',
            component:  CourseListComponent
         },
         {
            path: 'payment',
            component: PaymentComponent
         },
         {
            path: 'signin',
            component: SigninComponent
         }
      ]
   }
];
