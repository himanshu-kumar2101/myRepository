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
var router_1 = require("@angular/router");
var employee_service_1 = require("./employee.service");
var employee_1 = require("./employee");
var AddEmployeeComponent = (function () {
    function AddEmployeeComponent(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
        this.employee = new employee_1.Employee();
    }
    AddEmployeeComponent.prototype.addEmployee = function () {
        var _this = this;
        this.employeeService.addEmployee(this.employee)
            .subscribe(function (response) { console.log(response); }, function (error) {
            console.log(error);
            _this.statusMessage = "Problem with service. Please try again later!";
        });
    };
    return AddEmployeeComponent;
}());
AddEmployeeComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './addEmployee.component.html',
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService,
        router_1.Router])
], AddEmployeeComponent);
exports.AddEmployeeComponent = AddEmployeeComponent;
//# sourceMappingURL=addEmployee.component.js.map