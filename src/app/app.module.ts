import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ReportpageComponent } from './Components/reportpage/reportpage.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
import { LoginComponent } from './Components/Admin/login/login.component';
import { InfoComponent } from './Components/info/info.component';
import { PhysicalAbuseComponent } from './Components/InfoDetails/physical-abuse/physical-abuse.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ReportpageComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    InfoComponent,
    PhysicalAbuseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
