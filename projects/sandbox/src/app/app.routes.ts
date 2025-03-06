import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'users',
    title: 'Users',
    loadChildren: () => import('./users/users.routes').then((m) => m.routes),
  },
  {
    path: 'home',
    title: 'Home',
    loadChildren: () => import('./home/home.routes').then((m) => m.routes),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
