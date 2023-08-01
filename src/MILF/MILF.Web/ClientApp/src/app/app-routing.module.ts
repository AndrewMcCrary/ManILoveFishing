import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewsComponent } from './components/news/news.component';
import { SocialComponent } from './components/social/social.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component'
import { MapComponent } from './components/map/map.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'news', component: NewsComponent},
  { path: 'social', component: SocialComponent },
  { path: 'map', component: MapComponent },
  { path: 'tutorials', component: TutorialsComponent},
  { path: 'shop', component: ShopComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
