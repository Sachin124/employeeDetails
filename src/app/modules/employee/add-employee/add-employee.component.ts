import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employee:any ={};
@Output() saveData = new EventEmitter();
@Output() onClose = new EventEmitter();
  technologies:any[]= [
    {id:1, name:"JavaScript"},
    {id:2, name:"CSS"},
    {id:3, name:"TypeScript"},
    {id:4, name:"HTML"},
    {id:5, name:"React"},
    {id:6, name:"Angular"},

  ]
  selectedAns : any[] =[];



  constructor() { }

  ngOnInit() {
  }





  
  choose(ans: any, isChecked: boolean): void { 
   if(isChecked){
    let empIndex = this.selectedAns.findIndex(p=>{
      return p.id === ans.id
    })
    if(empIndex === -1){
      if(isChecked){
        this.selectedAns.push(ans);
      }
    }
   }else if(!isChecked){
    let empIndex = this.selectedAns.findIndex(p=>{
      return p.id === ans.id
    })
      if(empIndex){
        this.selectedAns.splice(empIndex,1)
    }
   }
      
  }

  closeModal():void {
    this.onClose.emit();
    this.onClose.emit('all closed');
  }

  save():void{
    const submitData ={
      fName: this.employee.fName,
      lName: this.employee.lName,
      mobile: this.employee.mobile,
      address: this.employee.address,
      isWorking: this.employee.isWorking,
      technologies:this.selectedAns
    }
    console.log(submitData);
    this.saveData.emit(submitData);
    this.closeModal();
  }
}
