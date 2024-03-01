import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stalking',
  templateUrl: './stalking.component.html',
  styleUrls: ['./stalking.component.scss']
})
export class StalkingComponent {
  constructor(
    private router: Router,
  ) {
    
   }
  navigateToInfoPage() {
    this.router.navigate(['/info']);
  }
}
