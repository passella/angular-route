import {Routes} from '@angular/router';
import {LoginComponent} from '../../application/components/login/login.component';

export const routes: Routes = [
  {path: '', loadChildren: () => import('./home.routes').then((m) => m.homeRoutes)},
  {path: 'login', component: LoginComponent},
];
