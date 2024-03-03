import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child-abuse',
  templateUrl: './child-abuse.component.html',
  styleUrls: ['./child-abuse.component.scss', './child-abuse-mobile.component.scss']
})
export class ChildAbuseComponent {
  constructor(
    private router: Router,
  ) {
    
   }
  navigateToInfoPage() {
    this.router.navigate(['/info']);
  }
}
