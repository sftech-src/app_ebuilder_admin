import { Routes } from '@angular/router';
import { ConfigurationsComponent } from './configurations.component';
import { ConfigurationListComponent } from './components/configuration-list/configuration-list.component';

export const CONFIGURATIONS_ROUTES: Routes = [
  {
    path: '',
    component: ConfigurationsComponent,
    children: [
      {
        path: '',
        component: ConfigurationListComponent,
      },
    ],
  },
];
