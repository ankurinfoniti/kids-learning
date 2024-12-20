import { Routes } from '@angular/router';

import { HomeComponent } from './routes/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'reading/:type',
    loadComponent: () => import('./routes/letters/letter/letter.component'),
  },
];
