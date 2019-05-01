"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var addEmployee_component_1 = require("./addEmployee.component");
var viewEmployees_component_1 = require("./viewEmployees.component");
var employee_service_1 = require("./employee.service");
var department_service_1 = require("./department.service");
var department_directive_1 = require("./department.directive");
var routes = [
    { path: 'viewEmployees', component: viewEmployees_component_1.ViewEmployeesComponent },
    { path: 'addEmployee', component: addEmployee_component_1.AddEmployeeComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(routes), http_1.HttpModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, addEmployee_component_1.AddEmployeeComponent, viewEmployees_component_1.ViewEmployeesComponent, department_directive_1.ViewDepartmentsDirective],
        providers: [employee_service_1.EmployeeService, department_service_1.DepartmentService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map