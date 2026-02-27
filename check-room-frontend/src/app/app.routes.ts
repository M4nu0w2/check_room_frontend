import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { AulaComponent } from './aula-component/aula-component';
import { Logincomponent } from './logincomponent/logincomponent';

export const routes: Routes = [
    { path: '', redirectTo: "home", pathMatch: "full"},
  { path: 'home', component: HomeComponent },
  { path: 'aula', component: AulaComponent },
  { path: 'login', component: Logincomponent },
];