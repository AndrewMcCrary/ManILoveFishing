import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { StoreItemComponent } from './store-item/store-item.component';



@NgModule({
  declarations: [
    StoreComponent,
    StoreItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StoreModule { }
