import {Directive} from '@angular/core';
import {Router} from '@angular/router';
import {DepartmentService} from './department.service';
import { Department } from './department';

@Directive({
  selector: 'my-app',
})
export class ViewDepartmentsDirective { 
    statusMessage: string;
    departments: Department[];

    constructor(private departmentService: DepartmentService,
                private router: Router){}

    ngOnInit(): void {
        console.log("calling ngOnInit()::::");
        this.viewDepartments();
    }

    viewDepartments(): void{
        this.departmentService.viewDepartments()
            .subscribe((departmentsData) => this.departments = departmentsData,
            (error) =>{
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            }
        );   
    }
}
