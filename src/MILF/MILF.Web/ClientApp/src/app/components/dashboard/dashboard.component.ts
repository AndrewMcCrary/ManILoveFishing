import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  navigateToMapPage() {
    this.router.navigate(['/map']);
  }

  navigateToSocialPage() {
    this.router.navigate(['/social']);
  }

  navigateToNewsPage() {
    this.router.navigate(['/news']);
  }

  navigateToTutorialsPage() {
    this.router.navigate(['/tutorials']);
  }
}
