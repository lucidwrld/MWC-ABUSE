import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spiritual-abuse',
  templateUrl: './spiritual-abuse.component.html',
  styleUrls: ['./spiritual-abuse.component.scss']
})
export class SpiritualAbuseComponent {
  constructor(
    private router: Router,
  ) {
    
   }
  navigateToInfoPage() {
    this.router.navigate(['/info']);
  }
}
