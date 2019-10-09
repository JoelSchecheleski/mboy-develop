import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule,
			MatIconModule,
			MatButtonModule,
			MatDividerModule,
			MatGridListModule,
			MatListModule,
			MatMenuModule,
			MatPaginatorModule,
			MatTabsModule,
			MatChipsModule,
			MatFormFieldModule,
			MatExpansionModule,
         MatCheckboxModule,
         MatRadioModule,
         MatSelectModule,
			MatInputModule
			} from '@angular/material';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BarRatingModule } from "ngx-bar-rating";
import { CardModule } from 'ngx-card/ngx-card';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { CoursesRoutes } from './courses.routing';
import { PaymentComponent } from './payment/payment.component';
import { SigninComponent } from './signin/signin.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursesCardComponent } from './courses-widget/courses-card/courses-card.component';
import { InstructorCardComponent } from './courses-widget/instructor-card/instructor-card.component';
import { CoursesBannerComponent } from './courses-widget/courses-banner/courses-banner.component';
import { CoursesDescriptionComponent } from './courses-widget/courses-description/courses-description.component';
import { CourseDetailBannerComponent } from './courses-widget/course-detail-banner/course-detail-banner.component';
import { CourseDetailDescriptionComponent } from './courses-widget/course-detail-description/course-detail-description.component';
import { CourseDetailInstructorComponent } from './courses-widget/course-detail-instructor/course-detail-instructor.component';
import { CourseDetailBillingComponent } from './courses-widget/course-detail-billing/course-detail-billing.component';
import { CourseDetailOverviewComponent } from './courses-widget/course-detail-overview/course-detail-overview.component';
import { CourseDetailLearnComponent } from './courses-widget/course-detail-learn/course-detail-learn.component';

@NgModule({
	declarations: [
		CoursesComponent,
		CoursesDetailComponent,
		CourseListComponent,
		PaymentComponent, 
		SigninComponent,
		CoursesCardComponent,
		InstructorCardComponent, 
		CoursesBannerComponent, 
		CoursesDescriptionComponent, 
		CourseDetailBannerComponent, 
		CourseDetailDescriptionComponent, 
		CourseDetailInstructorComponent, 
		CourseDetailBillingComponent, 
		CourseDetailOverviewComponent, 
		CourseDetailLearnComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		RouterModule.forChild(CoursesRoutes),
		FlexLayoutModule,
		MatCardModule,
		CardModule,
		MatIconModule,
		MatButtonModule,
		MatDividerModule,
		MatGridListModule,
		MatListModule,
		MatMenuModule,
		MatPaginatorModule,
		MatTabsModule,
		MatChipsModule,
		MatFormFieldModule,
		MatExpansionModule,
      MatInputModule,
      MatRadioModule,
      MatSelectModule,
      MatCheckboxModule,
      BarRatingModule,
    	TranslateModule
	]
})
export class CoursesModule { }
