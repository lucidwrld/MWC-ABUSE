import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elder-abuse',
  templateUrl: './elder-abuse.component.html',
  styleUrls: ['./elder-abuse.component.scss', './elder-abuse-mobile.component.scss']
})
export class ElderAbuseComponent {
  constructor(
    private router: Router,
  ) {
    
   }
  navigateToInfoPage() {
    this.router.navigate(['/info']);
  }
}
