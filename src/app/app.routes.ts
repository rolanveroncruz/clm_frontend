import { Routes } from '@angular/router';
import {Homepage} from './homepage/homepage';
import {Login} from './login/login';
import {NotFound} from './not-found/not-found';
import {Dashboard} from './dashboard/dashboard';

export const routes: Routes = [
  {path:'', component:Homepage},
  {path:'login',component:Login},
  {path:'dashboard',component:Dashboard},
  {path:'**', component: NotFound}];
