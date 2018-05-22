System.register(["angular2/core", "angular2/router", '../../services/studentService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, studentService_1;
    var StudentListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (studentService_1_1) {
                studentService_1 = studentService_1_1;
            }],
        execute: function() {
            StudentListComponent = (function () {
                function StudentListComponent(service) {
                    this.service = service;
                }
                StudentListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.service.list()
                        .subscribe(function (data) { return _this.students = data; });
                };
                StudentListComponent = __decorate([
                    core_1.Component({
                        selector: "student-list",
                        template: "\n        <h1>List of Students</h1>  \n        <table class=\"table\"> \n            <tr> \n                <th>Full Name</th>\n                <th>Gender</th> \n                <th>Date Of Birth</th>  \n                <th>Phone Number</th>  \n                <th>E-mail</th>   \n            </tr>    \n            <tr *ngFor=\"#student of students\">\n                <td>\n                    <a href=\"\" [routerLink]=\"['StudentEdit',{'id':student.id}]\" class=\"btn btn-link\">\n                     {{student.firstName}} {{student.lastName}}\n                    </a>\n                </td>\n                <td>\n                    {{student.gender}}\n                </td>\n                <td>\n                    {{student.dateOfBirth}}\n                </td>\n                <td>\n                    {{student.phoneNumber}}\n                </td>\n                <td>\n                    {{student.email}}\n                </td> \n            </tr> \n        </table>\n        <p>\n             <a href=\"\" [routerLink]=\"['StudentAdd']\" class=\"btn btn-primary\">Add</a>\n        </p>\n        ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [studentService_1.StudentService]
                    }), 
                    __metadata('design:paramtypes', [studentService_1.StudentService])
                ], StudentListComponent);
                return StudentListComponent;
            }());
            exports_1("StudentListComponent", StudentListComponent);
        }
    }
});
//# sourceMappingURL=list.component.js.map