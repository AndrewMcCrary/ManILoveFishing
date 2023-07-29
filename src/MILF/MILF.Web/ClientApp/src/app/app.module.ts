import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { NewsComponent } from './news/news.component';
import { SocialComponent } from './social/social.component';
import { MapComponent } from './map/map.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { StoreModule } from './store/store.module';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    SocialComponent,
    MapComponent,
    TutorialsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
