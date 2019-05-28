import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html'
})
export class ViewEmployeesComponent{
  employeeDetails: any[] = [];
  modalRef: BsModalRef;
  technicalKnowledge: any;
  constructor(private modalService: BsModalService) { }

  // To Open the pop-up bootstrap model

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  // To close the pop-up bootstrap model

  execOnClose($event: any):void{
    this.modalRef.hide();
  }


  // TO save new employee data

  saveData(empDetails) {
    this.employeeDetails.push(empDetails);
    console.log(this.employeeDetails);    
  }

  // view technical knowledge

  viewTechnicalKnowledge(techKnowledge: TemplateRef<any>, technicalKnowledge):void{
    this.modalRef = this.modalService.show(techKnowledge);

    console.log(technicalKnowledge); 
    this.technicalKnowledge = technicalKnowledge;   
  }

  // To delete employee details

  deleteEmployee(empId):void{
    this.employeeDetails.splice(empId, 1);
  }
}
