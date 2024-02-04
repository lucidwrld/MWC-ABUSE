import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

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
}
