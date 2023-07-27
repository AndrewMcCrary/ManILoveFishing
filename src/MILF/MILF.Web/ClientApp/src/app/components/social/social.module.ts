import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SocialComponent } from './social.component';
import { CommonModule } from '@angular/common';
import { FriendsListComponent } from './friends-list/friends-list.component'
import { ScrollerModule } from 'primeng/scroller';

@NgModule({
    declarations: [
        SocialComponent,
        FriendsListComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        ScrollerModule
    ],
    providers: [],
    bootstrap: []
})
export class SocialModule { }
