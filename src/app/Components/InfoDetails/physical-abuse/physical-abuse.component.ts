import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-physical-abuse',
  templateUrl: './physical-abuse.component.html',
  styleUrls: ['./physical-abuse.component.scss', './physical-abuse-mobile.component.scss']
})
export class PhysicalAbuseComponent {
  
  constructor(
    private router: Router,
  ) {
    
   }
  navigateToInfoPage() {
    this.router.navigate(['/info']);
  }
}
