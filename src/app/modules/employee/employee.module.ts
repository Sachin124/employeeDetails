import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [ViewEmployeesComponent, AddEmployeeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(EmployeeRoutingModule),
    ModalModule.forRoot(),
    FormsModule
  ]
})
export class EmployeeModule { }
