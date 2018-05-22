System.register(["angular2/core", "angular2/router", '../../models/studentModel', '../../services/studentService'], function(exports_1, context_1) {
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
    var core_1, router_1, studentModel_1, studentService_1;
    var StudentEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (studentModel_1_1) {
                studentModel_1 = studentModel_1_1;
            },
            function (studentService_1_1) {
                studentService_1 = studentService_1_1;
            }],
        execute: function() {
            StudentEditComponent = (function () {
                function StudentEditComponent(student, service, router, params) {
                    this.student = student;
                    this.service = service;
                    this.router = router;
                    this.id = params.get("id");
                }
                StudentEditComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.service.get(this.id)
                        .subscribe(function (data) { return _this.student = data; });
                };
                StudentEditComponent.prototype.onSubmit = function () {
                    var _this = this;
                    console.log(this.student);
                    this.service.edit(this.id, this.student).subscribe(function (data) {
                        _this.router.navigate(['/student-list']);
                    });
                };
                StudentEditComponent = __decorate([
                    core_1.Component({
                        selector: "student-edit",
                        template: "<h2>Edit Student</h2>\n\n    <form method=\"post\" role=\"form\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-horizontal\">\n\n            <div class=\"form-group\">\n                <label for=\"firstName\" class=\"col-md-2 control-label\">First Name</label>\n                <div class=\"col-md-10\">\n                    <input [(ngModel)]=\"student.firstName\" type=\"text\" class=\"form-control\" />\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"lastName\" class=\"col-md-2 control-label\">Last Name</label>\n                <div class=\"col-md-10\">\n                    <input [(ngModel)]=\"student.lastName\" type=\"text\" class=\"form-control\" />\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"gender\" class=\"col-md-2 control-label\">Gender</label>\n                <div class=\"col-md-10\">\n                    <input [(ngModel)]=\"student.gender\" type=\"text\" class=\"form-control\" />\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"phoneNumber\" class=\"col-md-2 control-label\">Phone Number</label>\n                <div class=\"col-md-10\">\n                    <input  [(ngModel)]=\"student.phoneNumber\" type=\"tel\" class=\"form-control\" />\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"dateOfBirth\" class=\"col-md-2 control-label\">Date Of Birth</label>\n                <div class=\"col-md-10\">\n                    <input  [(ngModel)]=\"student.dateOfBirth\"  type=\"date\" class=\"form-control\" />\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"email\" class=\"col-md-2 control-label\">E-mail</label>\n                <div class=\"col-md-10\">\n                    <input  [(ngModel)]=\"student.email\"  type=\"email\" class=\"form-control\" />\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"address\" class=\"col-md-2 control-label\">Address</label>\n                <div class=\"col-md-10\">\n                    <textarea  [(ngModel)]=\"student.address\" class=\"form-control\"></textarea>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"col-md-offset-2 col-md-10\">\n                    <input type=\"submit\" value=\"Save\" class=\"btn btn-default\" />\n                </div>\n            </div>\n        </div>\n    </form>\n\n   <p>\n       <a href=\"\" [routerLink]=\"['StudentList']\" class=\"btn btn-lin\">Back to List</a>\n   </p>\n",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [studentService_1.StudentService],
                        viewProviders: [studentModel_1.StudentModel]
                    }), 
                    __metadata('design:paramtypes', [studentModel_1.StudentModel, studentService_1.StudentService, router_1.Router, router_1.RouteParams])
                ], StudentEditComponent);
                return StudentEditComponent;
            }());
            exports_1("StudentEditComponent", StudentEditComponent);
        }
    }
});
//# sourceMappingURL=edit.component.js.map