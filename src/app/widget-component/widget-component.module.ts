import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule,
			MatButtonModule,
			MatIconModule,
			MatDialogModule,
			MatFormFieldModule,
			MatSelectModule,
			MatMenuModule,
			MatDividerModule,
			MatSnackBarModule,
			MatInputModule,
			MatChipsModule
		} from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { QuillModule } from 'ngx-quill';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { EmbedVideo } from 'ngx-embed-video';

import { nvD3 } from "../core/nvD3/nvD3.component";

import { ShopGridComponent } from './shop-type/shop-grid/shop-grid.component';
import { DeleteDialogComponent } from './pop-up/delete-dialog/delete-dialog.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { StackedAreaChartComponent } from './stacked-area-chart/stacked-area-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { AddNewCardComponent } from './pop-up/add-new-card/add-new-card.component';
import { InboxComposeComponent } from './pop-up/inbox-compose/inbox-compose.component';
import { AddNewUserComponent } from './pop-up/add-new-user/add-new-user.component';
import { EditNewUserComponent } from './pop-up/edit-new-user/edit-new-user.component';
import { LanguageDropDownComponent } from './global/language-drop-down/language-drop-down.component';
import { UserProfileComponent } from './user-profileV2/user-profile/user-profile.component';
import { ResearchInterestsComponent } from './user-profileV2/research-interests/research-interests.component';
import { FollowersComponent } from './user-profileV2/followers/followers.component';
import { PublicationsComponent } from './user-profileV2/publications/publications.component';
import { VideoPlayerComponent } from './pop-up/video-player/video-player.component';
import { ShopListComponent } from './shop-type/shop-list/shop-list.component';
import { PaymentMessageComponent } from './pop-up/payment-message/payment-message.component';

@NgModule({
	declarations: [
		ShopGridComponent,
		DeleteDialogComponent,
		AddNewCardComponent,
		LineChartComponent,
		StackedAreaChartComponent,
		PieChartComponent,
		nvD3,
		InboxComposeComponent,
		AddNewUserComponent,
		EditNewUserComponent,
		LanguageDropDownComponent,
		UserProfileComponent,
		ResearchInterestsComponent,
		FollowersComponent,
		PublicationsComponent,
		VideoPlayerComponent,
		ShopListComponent,
		PaymentMessageComponent
	],
	imports: [
		CommonModule,
		MatCardModule,
		FlexLayoutModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
		QuillModule,
		MatDialogModule,
		MatFormFieldModule,
		MatSelectModule,
		MatMenuModule,
		MatDividerModule,
		FormsModule,
		ReactiveFormsModule,
		TextMaskModule,
		ChartsModule,
		MatSnackBarModule,
		TranslateModule,
		MatChipsModule,
		EmbedVideo.forRoot()

	],
	exports: [
		ShopGridComponent,
		LineChartComponent,
		PieChartComponent,
		StackedAreaChartComponent,
		LanguageDropDownComponent,
		FollowersComponent,
		ResearchInterestsComponent,
		UserProfileComponent,
		PublicationsComponent,
		ShopListComponent
	],
	entryComponents : [
		DeleteDialogComponent,
		AddNewCardComponent,
		InboxComposeComponent,
		AddNewUserComponent,
		EditNewUserComponent,
		VideoPlayerComponent,
		PaymentMessageComponent
	]
})

export class WidgetComponentModule { }
