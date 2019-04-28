import { Component } from '@angular/core';
import { Employee } from './employee';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'my-app',
  templateUrl: './viewEmployees.component.html',
})
export class ViewEmployeesComponent  { 
    employee = new Employee();
    statusMessage: string;
    employees: Employee[];
    constructor(private employeeService: EmployeeService,
                private router: Router){}
    
    ngOnInit(): void {
        console.log("calling ngOnInit()::::");
        this.viewEmployees();
    }
 
    viewEmployees(): void{
        console.log("Inside viewEmployees():::::")
        this.employeeService.viewEmployees()
            .subscribe((employeesData) => this.employees = employeesData,
            (error) =>{
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            }
        );
        console.log("end of viewEmployees():::::");
    }

}
