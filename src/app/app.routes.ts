import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'blueprints',
    loadChildren: () =>
      import('./features/blueprints/blueprints.routes').then(
        (m) => m.BLUEPRINTS_ROUTES,
      ),
  },
  {
    path: 'configurations',
    loadChildren: () =>
      import('./features/configurations/configurations.routes').then(
        (m) => m.CONFIGURATIONS_ROUTES,
      ),
  },
  {
    path: '',
    redirectTo: 'blueprints',
    pathMatch: 'full',
  },
];
