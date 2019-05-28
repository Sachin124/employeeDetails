import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.scss']
})
export class ViewEmployeesComponent implements OnInit {
  employeeDetails: any[] = []

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
  }

  // To close the pop-up bootstrap model

  execOnClose($event: any):void{
    this.modalRef.hide();
  }

  saveData(empDetails) {
    this.employeeDetails.push(empDetails);
    console.log(this.employeeDetails);    
  }
}
