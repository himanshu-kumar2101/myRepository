import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { AddEmployeeComponent } from './addEmployee.component';
import { ViewEmployeesComponent } from './viewEmployees.component';
import { EmployeeService } from './employee.service';

const routes: Routes = [
  { path: 'viewEmployees', component: ViewEmployeesComponent },
  { path: 'addEmployee', component: AddEmployeeComponent }
];


@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes), HttpModule, FormsModule ],
  declarations: [ AppComponent, AddEmployeeComponent, ViewEmployeesComponent ],
  providers: [EmployeeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
