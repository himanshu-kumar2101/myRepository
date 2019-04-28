"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var employee_1 = require("./employee");
var router_1 = require("@angular/router");
var employee_service_1 = require("./employee.service");
var ViewEmployeesComponent = (function () {
    function ViewEmployeesComponent(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
        this.employee = new employee_1.Employee();
    }
    ViewEmployeesComponent.prototype.ngOnInit = function () {
        console.log("calling ngOnInit()::::");
        this.viewEmployees();
    };
    ViewEmployeesComponent.prototype.viewEmployees = function () {
        var _this = this;
        console.log("Inside viewEmployees():::::");
        this.employeeService.viewEmployees()
            .subscribe(function (employeesData) { return _this.employees = employeesData; }, function (error) {
            console.log(error);
            _this.statusMessage = "Problem with service. Please try again later!";
        });
        console.log("end of viewEmployees():::::");
    };
    return ViewEmployeesComponent;
}());
ViewEmployeesComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './viewEmployees.component.html',
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService,
        router_1.Router])
], ViewEmployeesComponent);
exports.ViewEmployeesComponent = ViewEmployeesComponent;
//# sourceMappingURL=viewEmployees.component.js.map