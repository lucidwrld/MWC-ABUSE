import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  constructor(private router: Router) {}
  activeOption: string = 'mostComm'; // Default active option

 
  mostComm: boolean = true;
  mostSevere: boolean = false;
  toggleMostComm(){
    this.mostComm = true;
    this.activeOption = 'mostComm';
    this.mostSevere = false
  }
  toggleMostSev(){
    this.mostComm = false;
    this.activeOption = 'mostSev';
    this.mostSevere = true
  }
  navigateToPhysicalAbusePage() {
    this.router.navigate(['/physicalAB']);
  }
  navigateToEmotionalAbusePage() {
    this.router.navigate(['/emotionalAB']);
  }
  navigateToSexualAbusePage() {
    this.router.navigate(['/sexualAB']);
  }
  navigateToChildAbusePage() {
    this.router.navigate(['/childAB']);
  }
  navigateToVerbalAbusePage() {
    this.router.navigate(['/verbalAB']);
  }
  navigateToElderAbusePage() {
    this.router.navigate(['/elderAB']);
  }
  navigateToStalkingPage() {
    this.router.navigate(['/stalkingAB']);
  }
  navigateToSpiritualAbusePage() {
    this.router.navigate(['/spiritualAB']);
  }
}
