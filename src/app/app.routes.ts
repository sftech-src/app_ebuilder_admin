import { Routes } from '@angular/router';
import { authenticationGuard } from '@sftech/ng-auth';

export const appRoutes: Routes = [
  {
    path: 'blueprints',
    loadChildren: () =>
      import('./features/blueprints/blueprints.routes').then(
        (m) => m.BLUEPRINTS_ROUTES,
      ),
    canActivate: [authenticationGuard],
  },
  {
    path: 'configurations',
    loadChildren: () =>
      import('./features/configurations/configurations.routes').then(
        (m) => m.CONFIGURATIONS_ROUTES,
      ),
    canActivate: [authenticationGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@sftech/ng-auth').then((m) => m.authRoutes),
  },
  {
    path: '',
    redirectTo: 'blueprints',
    pathMatch: 'full',
  },
];
