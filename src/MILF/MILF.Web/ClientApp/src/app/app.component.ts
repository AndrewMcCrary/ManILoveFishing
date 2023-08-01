import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'milf-web';

  public menuItems: MenuItem[] = [
    {
      label: 'Home',
      url: '/',
      tabindex: '0',
    },
    {
      label: 'Map',
      url: '/map',
      tabindex: '1'
    },
    {
      label: 'Social',
      url: '/social',
      tabindex: '2'
    },
    {
      label: 'News',
      url: '/news',
      tabindex: '3'
    },
    {
      label: 'Tutorials',
      url: '/tutorials',
      tabindex: '4'
    },
    {
      label: 'Shop',
      url: '/shop',
      tabindex: '5'
    }
  ]

}
