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
      label: 'home',
      url: '/',
      tabindex: '0',
    },
    {
      label: 'social',
      url: '/social',
      tabindex: '1'
    },
    {
      label: 'store',
      url: '/store',
      tabindex: '2'
    }
  ]

}
