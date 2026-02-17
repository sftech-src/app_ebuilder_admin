import { Routes } from '@angular/router';
import { BlueprintsComponent } from './blueprints.component';
import { BlueprintListComponent } from './components/blueprint-list/blueprint-list.component';

export const BLUEPRINTS_ROUTES: Routes = [
  {
    path: '',
    component: BlueprintsComponent,
    children: [
      {
        path: '',
        component: BlueprintListComponent,
      },
    ],
  },
];
