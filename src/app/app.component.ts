import { Component, Inject, effect, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '@sftech/ng-auth';
import {
  HeadMainFooterWithCanvasComponent,
  IAppConfig,
  ISidebarNavigationCategory,
} from '@sftech/ng-shared';

@Component({
  imports: [RouterModule, HeadMainFooterWithCanvasComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'EBuilder Admin';
  currentYear = new Date().getFullYear();
  navigation: ISidebarNavigationCategory[] = [];

  private _authService = inject(AuthenticationService);

  constructor(@Inject('APP_CONFIG') private appConfig: IAppConfig) {
    if (this.appConfig['AUTH_PROVIDER'] === 'none') {
      this.navigation = this._buildNavigation();
      return;
    }

    effect(() => {
      const isAuthenticated = this._authService.isAuthenticated();
      if (isAuthenticated) {
        this.navigation = this._buildNavigation();
      } else {
        this.navigation = [];
      }
    });
  }

  private _buildNavigation(): ISidebarNavigationCategory[] {
    return [
      {
        categoryName: 'Verwaltung',
        links: [
          {
            name: 'Blueprints',
            routerLink: '/blueprints',
          },
          {
            name: 'Konfigurationen',
            routerLink: '/configurations',
          },
        ],
      },
    ];
  }
}
