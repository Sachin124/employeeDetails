import { Routes } from '@angular/router';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';

export const EmployeeRoutingModule: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: ViewEmployeesComponent
    }]
  }
];