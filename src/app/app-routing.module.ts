import { Routes } from '@angular/router';
import { } from './modules/employee/employee.module';
import { LayoutComponent } from './layout/layout.component';
export const AppRoutingModule: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent, children: [
      { path: 'employees', loadChildren: './modules/employee/employee.module#EmployeeModule' }
    ]
  }
];
