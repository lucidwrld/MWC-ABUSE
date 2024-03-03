import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verbal-abuse',
  templateUrl: './verbal-abuse.component.html',
  styleUrls: ['./verbal-abuse.component.scss', './verbal-abuse-mobile.component.scss']
})
export class VerbalAbuseComponent {
  constructor (
    private router: Router,
  ) {
    
   }
  navigateToInfoPage() {
    this.router.navigate(['/info']);
  }
}
