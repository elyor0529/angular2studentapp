System.register(["angular2/http", '../config', 'angular2/core', "rxjs/Rx"], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var http_1, config_1, core_1;
    var StudentService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            StudentService = (function () {
                function StudentService(http) {
                    this.http = http;
                }
                StudentService.prototype.list = function () {
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.get(config_1.API_URL + "/list", options)
                        .map(function (res) { return res.json(); });
                };
                StudentService.prototype.get = function (id) {
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.get(config_1.API_URL + "/get/" + id, options)
                        .map(function (res) { return res.json(); });
                };
                StudentService.prototype.add = function (student) {
                    var body = JSON.stringify(student);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({
                        headers: headers
                    });
                    return this.http.post(config_1.API_URL + "/add", body, options)
                        .map(function (res) { return res.json(); });
                };
                StudentService.prototype.edit = function (id, student) {
                    var body = JSON.stringify(student);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({
                        headers: headers
                    });
                    return this.http.put(config_1.API_URL + "/edit/" + id, body, options)
                        .map(function (res) { return res.json(); });
                };
                StudentService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(http_1.Http)), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], StudentService);
                return StudentService;
            }());
            exports_1("StudentService", StudentService);
        }
    }
});
//# sourceMappingURL=studentService.js.map