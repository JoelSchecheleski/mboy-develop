import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {MboyAppModule} from './app/app.module';
import {environment} from './environments/environment';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(MboyAppModule);



