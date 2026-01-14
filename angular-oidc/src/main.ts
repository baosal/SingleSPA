import { enableProdMode, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig).catch((err) => {
  if (isDevMode() && err.message.includes('NG0908')) {
    console.warn('Platform already created, skipping re-bootstrap in dev mode');
  } else {
    console.error(err);
  }
});
