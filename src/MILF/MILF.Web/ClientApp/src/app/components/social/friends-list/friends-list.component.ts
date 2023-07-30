import { Component, Input } from '@angular/core';
import { ScrollerOptions } from 'primeng/api';
import { friend } from 'src/app/shared/models/friend.model';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent {
  @Input() friends: Array<friend> | null = null;

}
