import { bootstrapApplication } from '@angular/platform-browser';
import { IAppConfig, loadConfig } from '@sftech/ng-shared';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

loadConfig<IAppConfig>('assets/config.json').then((config: IAppConfig) => {
  bootstrapApplication(AppComponent, appConfig(config)).catch((err) =>
    console.error(err),
  );
});
