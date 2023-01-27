import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppConfig } from './app/app-config';

import { AppModule, APP_CONFIG } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

fetch('./assets/config/config.json')
  .then(response => response.json())
  .then((config: AppConfig) => {
    platformBrowserDynamic([{
      provide: APP_CONFIG,
      useValue: config
    }]).bootstrapModule(AppModule)
    .catch(err => console.error(err));
  });

  // platformBrowserDynamic().bootstrapModule(AppModule)
  // .catch(err => console.error(err));