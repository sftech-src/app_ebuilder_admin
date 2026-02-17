import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { IAppConfig } from '@sftech/ng-shared';
import { EBuilderPreset } from './ebuilder.preset';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';

export function appConfig(config: IAppConfig): ApplicationConfig {
  return {
    providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(appRoutes),
      provideHttpClient(),
      provideAnimations(),
      providePrimeNG({
        ripple: true,
        theme: {
          preset: EBuilderPreset,
          options: {
            darkModeSelector: '.my-app-dark',
          },
        },
      }),
      MessageService,
      {
        provide: 'APP_CONFIG',
        useValue: config,
      },
    ],
  };
}
