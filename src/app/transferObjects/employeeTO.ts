import { EmployeeGuardianDetailsTO } from "./employeeGuardianDetailsTO";
import { EmployeePersonalInforTO } from "./employeePersonalInfoTO";
import { EmployeeRelationshipDetailsTO } from "./employeeRelationshipDetailsTO";

export class EmployeeTO {
    employeeID : String;
    enrollmentDate : Date;
    confirmationDate : Date;
    leftDate : Date;

    employeeGuardianDetails : EmployeeGuardianDetailsTO;
    employeePersonalInforTO : EmployeePersonalInforTO;
    employeeRelationshipDetailsTO : EmployeeRelationshipDetailsTO;

    constructor() {
        this.employeeGuardianDetails = new EmployeeGuardianDetailsTO();
        this.employeePersonalInforTO = new EmployeePersonalInforTO();
        this.employeeRelationshipDetailsTO = new EmployeeRelationshipDetailsTO();
    }
}