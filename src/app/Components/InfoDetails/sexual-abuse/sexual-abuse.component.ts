import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sexual-abuse',
  templateUrl: './sexual-abuse.component.html',
  styleUrls: ['./sexual-abuse.component.scss', './sexual-abuse-mobile.component.scss']
})
export class SexualAbuseComponent {
  constructor(
    private router: Router,
  ) {
    
   }
  navigateToInfoPage() {
    this.router.navigate(['/info']);
  }
}
