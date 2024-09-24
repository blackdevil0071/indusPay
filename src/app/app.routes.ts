import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagesComponent } from './components/pages/pages.component';

export const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'pages', component: PagesComponent },

];
