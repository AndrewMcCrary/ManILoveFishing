import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { NewsComponent } from './components/news/news.component';
import { MapComponent } from './components/map/map.component';
import { SocialModule } from './components/social/social.module'
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { friendsService } from './shared/services/friends.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { ShopComponent } from './shop/shop.component';



@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ShopComponent,
    MapComponent,
    TutorialsComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    SocialModule,
    NgbModule,
  ],
  providers: [
    friendsService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
