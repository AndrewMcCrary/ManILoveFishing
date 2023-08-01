import { Component, Input } from '@angular/core';
import { item } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss'],
})
export class StoreItemComponent {
  @Input() item: item | null = null;
}
