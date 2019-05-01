import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {EmployeeService} from './employee.service';
import {Employee} from './employee';
import { DepartmentService } from './department.service';
import { Http } from '@angular/http';
import {Department} from './department';

@Component({
  selector: 'my-app',
  templateUrl: './addEmployee.component.html',
})
export class AddEmployeeComponent { 
    statusMessage: string;
    employee = new Employee();
    departMentService = new DepartmentService(this._httpService);
    departments: Department[];

    constructor(private employeeService: EmployeeService,
                private router: Router, private _httpService: Http){}

    ngOnInit(): void {
        console.log("calling ngOnInit()::::");
        this.departMentService.viewDepartments().subscribe((departmentsData) => this.departments = departmentsData,(error) =>{
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            });
    }

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
