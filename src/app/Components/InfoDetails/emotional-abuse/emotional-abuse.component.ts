import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emotional-abuse',
  templateUrl: './emotional-abuse.component.html',
  styleUrls: ['./emotional-abuse.component.scss']
})
export class EmotionalAbuseComponent {
  constructor(
    private router: Router,
  ) {
    
   }
  navigateToInfoPage() {
    this.router.navigate(['/info']);
  }
}
