import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AddsAppAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AddsAppAppComponent);
