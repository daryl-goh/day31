import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {


  title = "Employee page"

  number1 = 12;
  number2 = 20;
  // visible = (this.number1 > this.number2) ? true : false;
  visible = this.ShowContent(this.number1,this.number2);

  IsVisible = true;

  ShowContent(val1: number, val2: number) : boolean {
    if (val1 < val2) {
      return true;
    } else {
      return false;
    }
  }

  OnChange(arg: any){
    this.IsVisible = arg;

  }
  
  color: any;

  SetColor(event: any) {
    this.color= event.target.value;
    }



}
