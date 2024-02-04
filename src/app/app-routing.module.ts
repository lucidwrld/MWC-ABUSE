import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ReportpageComponent } from './Components/reportpage/reportpage.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
import { LoginComponent } from './Components/Admin/login/login.component';
import { InfoComponent } from './Components/info/info.component';
import { PhysicalAbuseComponent } from './Components/InfoDetails/physical-abuse/physical-abuse.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'report', component: ReportpageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'adminlogin', component: LoginComponent },
  { path: 'info', component: InfoComponent },
  { path: 'physicalAB', component: PhysicalAbuseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
