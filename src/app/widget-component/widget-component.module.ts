import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatCardModule,
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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TextMaskModule} from 'angular2-text-mask';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {QuillModule} from 'ngx-quill';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TranslateModule} from '@ngx-translate/core';
import {EmbedVideo} from 'ngx-embed-video';

// import {nvD3} from '../core/nvD3/nvD3.component';

import {LanguageDropDownComponent} from './global/language-drop-down/language-drop-down.component';
import {UserProfileComponent} from './user-profileV2/user-profile/user-profile.component';
import {ResearchInterestsComponent} from './user-profileV2/research-interests/research-interests.component';
import {FollowersComponent} from './user-profileV2/followers/followers.component';
import {PublicationsComponent} from './user-profileV2/publications/publications.component';

@NgModule({
    declarations: [
        LanguageDropDownComponent,
        UserProfileComponent,
        ResearchInterestsComponent,
        FollowersComponent,
        PublicationsComponent,
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
        LanguageDropDownComponent,
        FollowersComponent,
        ResearchInterestsComponent,
        UserProfileComponent,
        PublicationsComponent,
    ],
    entryComponents: [
    ]
})

export class WidgetComponentModule {
}
