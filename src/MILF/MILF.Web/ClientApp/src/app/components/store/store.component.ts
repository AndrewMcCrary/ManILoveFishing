import { Component } from '@angular/core';
import { itemService } from '../../shared/services/item.service';
import { item } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  items: item[] | null = null;

  constructor(
    private itemService: itemService
  ) { }

  ngOnInit() {
    this.items = this.itemService.getItems()
  }
}
