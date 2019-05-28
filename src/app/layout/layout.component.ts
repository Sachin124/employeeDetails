import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template:`<app-navbar></app-navbar>
  <div class="container">
      <div class="row">
          <div class="col-12">
              <router-outlet></router-outlet>
          </div>
      </div>
  </div>
  <footer class="footer mt-auto py-3 bg-dark">
    <div class="container-fluid">
      <span class="text-white">Machine Test for Exceptionaire Technologies Pvt. Ltd.</span>
    </div>
  </footer>
  `
})
export class LayoutComponent {}
