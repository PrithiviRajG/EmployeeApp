import { Component } from '@angular/core';
import { EmployeeTO } from './transferObjects/employeeTO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  employee : EmployeeTO;

  constructor() {
    this.employee = new EmployeeTO();
  }

  submitEmployee(){

  }
}
