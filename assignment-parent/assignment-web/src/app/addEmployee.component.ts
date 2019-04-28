import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {EmployeeService} from './employee.service';
import {Employee} from './employee';

@Component({
  selector: 'my-app',
  templateUrl: './addEmployee.component.html',
})
export class AddEmployeeComponent { 
    statusMessage: string;
    employee = new Employee();

    constructor(private employeeService: EmployeeService,
                private router: Router){}

addEmployee(): void{
        this.employeeService.addEmployee(this.employee)
            .subscribe((response) => {console.log(response);},
            (error) =>{
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            }
        );   
    }
}
