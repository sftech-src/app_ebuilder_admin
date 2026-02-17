import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  HeadMainFooterWithCanvasComponent,
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

  navigation: ISidebarNavigationCategory[] = [
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
