import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', './about-mobile.component.scss']
})
export class AboutComponent {
  constructor(private router: Router) {}
  navigateToAdminPage() {
    this.router.navigate(['/adminlogin']);
  }
  navigateToInfoPage() {
    this.router.navigate(['/info']);
  }
}
