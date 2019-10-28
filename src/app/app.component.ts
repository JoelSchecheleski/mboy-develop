import {Component, Optional, ViewEncapsulation} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar} from '@angular/material';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'mboy-app',
    template: '<router-outlet></router-outlet>',
    encapsulation: ViewEncapsulation.None
})
export class MBoyAppComponent {
    constructor(translate: TranslateService) {
        translate.addLangs(['en', 'fr', 'he', 'ru', 'ar', 'zh', 'de', 'es', 'ja', 'ko', 'it', 'hu', 'pt-br']);
        translate.setDefaultLang('pt-br');

        const browserLang: string = translate.getBrowserLang();
        // translate.use(browserLang.match(/pt-br|en/) ? browserLang : 'pt-br');
        translate.use('pt-br' ? 'pt-br' : 'pt-br');
    }
}
