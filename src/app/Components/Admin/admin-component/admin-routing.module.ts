import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin-component.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminCasesComponent } from './admin-cases/admin-cases.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';

const adminRoutes: Routes = [
  {
    path: 'admincomponent',
    component: AdminComponent,
    children: [
      { path: '', component: AdminDashComponent },
      { path: 'admincases', component: AdminCasesComponent },
      { path: 'admindetails/:id', component: AdmindetailsComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
