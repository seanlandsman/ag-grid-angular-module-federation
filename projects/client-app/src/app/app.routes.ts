import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: 'first-grid',
    loadChildren: () => import('grid-one/Module').then(m => m.AppModule)
  },

  {
    path: 'second-grid',
    loadChildren: () => import('grid-two/Module').then(m => m.AppModule)
  },

  {
    path: '**',
    component: NotFoundComponent
  }

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.

];

