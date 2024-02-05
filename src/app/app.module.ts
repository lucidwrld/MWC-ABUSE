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
import { EmotionalAbuseComponent } from './Components/InfoDetails/emotional-abuse/emotional-abuse.component';
import { SexualAbuseComponent } from './Components/InfoDetails/sexual-abuse/sexual-abuse.component';
import { ChildAbuseComponent } from './Components/InfoDetails/child-abuse/child-abuse.component';
import { VerbalAbuseComponent } from './Components/InfoDetails/verbal-abuse/verbal-abuse.component';
import { ElderAbuseComponent } from './Components/InfoDetails/elder-abuse/elder-abuse.component';
import { StalkingComponent } from './Components/InfoDetails/stalking/stalking.component';
import { SpiritualAbuseComponent } from './Components/InfoDetails/spiritual-abuse/spiritual-abuse.component';

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
    PhysicalAbuseComponent,
    EmotionalAbuseComponent,
    SexualAbuseComponent,
    ChildAbuseComponent,
    VerbalAbuseComponent,
    ElderAbuseComponent,
    StalkingComponent,
    SpiritualAbuseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
