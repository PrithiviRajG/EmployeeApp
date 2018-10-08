import { Component } from '@angular/core';
import { EmployeeTO } from './transferObjects/employeeTO';
import {MAT_DATE_LOCALE} from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}]
})
export class AppComponent {
  title = 'app';

  minDate = new Date(1950, 0, 1);
  maxDate = new Date(2050, 0, 1);

  employee : EmployeeTO;

  employeeForm = new FormGroup({
    employeeId: new FormControl(''),
    enrollmentDate: new FormControl(''),
    confirmationDate: new FormControl(''),
    leftDate: new FormControl(''),
    employeeTitle: new FormControl(''),
    employeeFirstName: new FormControl(''),
    employeeMiddleName: new FormControl(''),
    employeeLastName: new FormControl(''),
    employeeSex: new FormControl(''),
    employeeMaritalStatus: new FormControl(''),
    employeeWeddingDate: new FormControl(''),
    relationFirstName: new FormControl(''),
    relationLastName: new FormControl(''),
    relationMiddleName: new FormControl(''),
    permanentAddress: new FormControl(''),
    communicationAddress: new FormControl(''),
    lastModifiedBy: new FormControl(''),
    modifiedOn: new FormControl(''),
    updatedBy: new FormControl(''),
    updatedOn: new FormControl(''),
    guardianAddressId: new FormControl(''),
    guardianRelationship: new FormControl(''),
    guardianLastName: new FormControl(''),
    guardianMiddleName: new FormControl(''),
    guardianFirstName: new FormControl(''),
    guardianTitle: new FormControl(''),

  });

  constructor() {
    this.employee = new EmployeeTO();
  }

  submitEmployee(){
    console.log(this.employee);
    console.log(JSON.stringify(this.employee));
    alert("Success! see the developer console!")

  }
}
