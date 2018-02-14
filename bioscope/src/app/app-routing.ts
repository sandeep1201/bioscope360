import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routerConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
      path: 'entertainment',
      component: EntertainmentComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: 'home',
      pathMatch: 'full'
  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(routerConfig);
