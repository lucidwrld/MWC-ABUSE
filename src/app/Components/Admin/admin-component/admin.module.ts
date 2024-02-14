import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin-component.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AdminCasesComponent } from './admin-cases/admin-cases.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminDashComponent,
    AdminCasesComponent,
    AdmindetailsComponent,
    SidebarComponent
  ],
  imports: [
    AdminRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ]
})
export class AdminModule {}
