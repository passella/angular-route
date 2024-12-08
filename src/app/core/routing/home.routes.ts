import {Routes} from '@angular/router';
import {HomeComponent} from '../../application/components/home/home.component';
import {authGuard} from '../guards/auth.guard';
import {Pagina1Component} from '../../application/components/pagina1/pagina1.component';
import {Pagina2Component} from '../../application/components/pagina2/pagina2.component';
import {DefaultComponent} from '../../application/components/default/default.component';

export const homeRoutes: Routes = [
  {
    path: '', component: HomeComponent, canActivateChild: [authGuard], children: [
      {path: '', component: DefaultComponent},
      {path: 'pagina1', component: Pagina1Component},
      {path: 'pagina2', component: Pagina2Component},
    ]
  }
];
