import {provideRouter, RouterConfig} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AboutComponent} from './components/about/about.component';

export const routes: RouterConfig = [
    { path: '', component: DashboardComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'about', component: AboutComponent }];

export const appRouterProviders = [ provideRouter(routes)];