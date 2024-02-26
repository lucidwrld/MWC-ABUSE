import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
constructor(private router: Router){}
activeOption: string = "";

showMenu: boolean = false
showMenuu(){
  this.showMenu = true
}
closeMenu(){
  this.showMenu = false
}
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is the login page
        if (event.url === '/admincomponent' ) {
          this.activeOption = 'tao';
        }
            else{
              if (event.url === '/admincomponent/admincases' || event.url === '/admincomponent/admindetails') {
                this.activeOption = 'th';
              }
            }
          
        }
    });
  }
  navigateToDashPage() {
    this.router.navigate(['/admincomponent']);
  }
  navigateToCasesPage() {
    this.router.navigate(['/admincomponent/admincases']);
  }
  navigateToLoginPage() {
    this.router.navigate(['/adminlogin']);
  }
}
