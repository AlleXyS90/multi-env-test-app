import { Inject, Injectable } from '@angular/core';
import { AppConfig } from '../app-config';
import { APP_CONFIG } from '../app.module';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(@Inject(APP_CONFIG) private config: AppConfig) {}

  getConfig(): AppConfig {
    return this.config;
  }
}
