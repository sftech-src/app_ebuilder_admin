import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AuthConfigMapper, AuthModule, authenticationInterceptor } from '@sftech/ng-auth';
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
      provideHttpClient(withInterceptors([authenticationInterceptor])),
      provideAnimations(),
      importProvidersFrom(AuthModule.forRoot(AuthConfigMapper.map(config))),
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
