import { Component, OnInit } from '@angular/core';import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) {}
  showNavbar: boolean = true;



  showMenu: boolean = false
  showMenuu(){
    this.showMenu = true
  }
  closeMenu(){
    this.showMenu = false
  }
  // Function to navigate to the report page
  navigateToReportPage() {

    this.router.navigate(['/report']);
  }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is the login page
        if (event.url === '/adminlogin' || event.url === '/loading' || event.url.includes('/admincomponent')) {
          this.showNavbar = false; 
        }
            else{
            this.showNavbar = true; 
            }// Show the navbar on other pages
          
        }
    });
    this.showMenu = false
  }
 
}
