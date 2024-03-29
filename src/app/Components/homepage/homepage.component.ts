import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss', './homepage-mobile.component.scss']
})
export class HomepageComponent {
  constructor(private router: Router) {}
  
  navigateToInfoPage() {
    this.router.navigate(['/info']);
  }
}
