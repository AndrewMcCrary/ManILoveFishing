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
    }
  ]

}
