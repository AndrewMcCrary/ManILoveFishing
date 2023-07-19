import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollerModule } from 'primeng/scroller'
import { friendsService } from '../../shared/services/friends.service'
import { friend } from 'src/app/shared/models/friend.model';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  friends: friend[] | null = null;

  constructor(
    private friendsService: friendsService
  ) { }

  ngOnInit() {
    this.friends = this.friendsService.getFriends()
  }
}
