import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ViewEmployeesComponent, AddEmployeeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(EmployeeRoutingModule)
  ]
})
export class EmployeeModule { }
