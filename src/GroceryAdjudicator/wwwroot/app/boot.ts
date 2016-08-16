import {provideRouter, RouterConfig} from '@angular/router';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide, bind } from '@angular/core';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './app.component';

import {appRouterProviders} from './app.routes';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
   // bind(LocationStrategy).toClass(HashLocationStrategy),
    provide(APP_BASE_HREF, {useValue: '/'}),
    appRouterProviders
]);