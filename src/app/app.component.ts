import { Component } from '@angular/core';
import { EmployeeTO } from './transferObjects/employeeTO';
import {MAT_DATE_LOCALE} from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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
  employeeForm : any;
  

  constructor() {
    this.employee = new EmployeeTO();

    this.employeeForm = new FormGroup({
      employeeId: new FormControl(
        {value: this.employee.employeeID, disabled: false},
        [Validators.required,
        Validators.maxLength(10)]),
      enrollmentDate: new FormControl(
        {value: this.employee.enrollmentDate, disabled: true},
        [Validators.required]),
      confirmationDate: new FormControl(
        {value: this.employee.confirmationDate, disabled: true}),
      leftDate: new FormControl(
        {value: this.employee.leftDate, disabled: true}),
      employeeTitle: new FormControl(
        {value: this.employee.employeePersonalInforTO.title, disabled: false},
        Validators.required),
      employeeFirstName: new FormControl(
        {value: this.employee.employeePersonalInforTO.firstName, disabled: false},
        Validators.required),
      employeeMiddleName: new FormControl(
        {value: this.employee.employeePersonalInforTO.middleName, disabled: false}),
      employeeLastName: new FormControl({value: this.employee.employeePersonalInforTO.lastName, disabled: false}),
      employeeSex: new FormControl({value: this.employee.employeePersonalInforTO.sex, disabled: false},Validators.required),
      employeeMaritalStatus: new FormControl({value: this.employee.employeePersonalInforTO.maritalStatus, disabled: false},Validators.required),
      employeeWeddingDate: new FormControl({value: this.employee.employeeRelationshipDetailsTO.weddingDate, disabled: false}),
      relationFirstName: new FormControl({value: this.employee.employeeRelationshipDetailsTO.firstName, disabled: false}),
      relationLastName: new FormControl({value: this.employee.employeeRelationshipDetailsTO.middleName, disabled: false}),
      relationMiddleName: new FormControl({value: this.employee.employeeRelationshipDetailsTO.lastName, disabled: false}),
      permanentAddress: new FormControl({value: this.employee.employeeRelationshipDetailsTO.permanentAddress, disabled: false}),
      communicationAddress: new FormControl({value: this.employee.employeeRelationshipDetailsTO.communicationAddress, disabled: false}),
      lastModifiedBy: new FormControl({value: this.employee.employeeGuardianDetails.lastModifiedBy, disabled: false}),
      modifiedOn: new FormControl({value: this.employee.employeeGuardianDetails.modifiedOn, disabled: false}),
      updatedBy: new FormControl({value: this.employee.employeeGuardianDetails.updatedBy, disabled: false}),
      updatedOn: new FormControl({value: this.employee.employeeGuardianDetails.updatedOn, disabled: false}),
      guardianAddressId: new FormControl({value: this.employee.employeeGuardianDetails.guardianAddressId, disabled: false}),
      guardianRelationship: new FormControl({value: this.employee.employeeGuardianDetails.guardianRelationship, disabled: false}),
      guardianLastName: new FormControl({value: this.employee.employeeGuardianDetails.lastName, disabled: false}),
      guardianMiddleName: new FormControl({value: this.employee.employeeGuardianDetails.middleName, disabled: false}),
      guardianFirstName: new FormControl({value: this.employee.employeeGuardianDetails.firstName, disabled: false}),
      guardianTitle: new FormControl({value: this.employee.employeeGuardianDetails.title, disabled: false})
  
    });
  }

  submitEmployee(){
    
    console.log(this.employee);
    this.employee = this.employeeForm.value;
    console.log(JSON.stringify(this.employeeForm.value));
    console.log(this.employee);
    alert("Success! see the developer console!")

  }
}
