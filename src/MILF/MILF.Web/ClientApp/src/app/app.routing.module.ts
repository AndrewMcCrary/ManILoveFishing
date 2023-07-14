import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page/page.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: PageComponent, data: {
    page: 'home'
  }},
  {path: 'TDF', component: PageComponent, data: {
    page: 'TDF'
  }},
  {path: 'DTF', component: PageComponent, data: {
    page: 'DTF'
  }},
  {path: 'MBT', component: PageComponent, data: {
    page: 'MBT'
  }},
  {path: 'LBIYA', component: PageComponent, data: {
    page: 'LBIYA'
  }},
  {path: 'Bait Buddy', component: PageComponent, data: {
    page: 'Bait Buddy'
  }},
  {path: 'Fish Hub', component: PageComponent, data: {
    page: 'Fish Hub'
  }},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}