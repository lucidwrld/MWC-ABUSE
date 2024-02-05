import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'report', component: ReportpageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'adminlogin', component: LoginComponent },
  { path: 'info', component: InfoComponent },
  { path: 'physicalAB', component: PhysicalAbuseComponent },
  { path: 'emotionalAB', component: EmotionalAbuseComponent },
  { path: 'sexualAB', component: SexualAbuseComponent },
  { path: 'childAB', component: ChildAbuseComponent },
  { path: 'verbalAB', component: VerbalAbuseComponent },
  { path: 'elderAB', component: ElderAbuseComponent },
  { path: 'stalkingAB', component: StalkingComponent },
  { path: 'spiritualAB', component: SpiritualAbuseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
