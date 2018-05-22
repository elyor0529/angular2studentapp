import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES } from "angular2/router";

import {StudentListComponent} from "./student/list.component";
import {StudentAddComponent} from "./student/add.component";
import {StudentEditComponent} from "./student/edit.component";

@Component({
    selector: "my-app",
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: "/student-list", name: "StudentList", component: StudentListComponent, useAsDefault: true },
    { path: "/student-add", name: "StudentAdd", component: StudentAddComponent },
    { path: "/student-edit/:id", name: "StudentEdit", component: StudentEditComponent },
    { path: "/**", redirectTo: ["StudentList"] }
])
export class AppComponent {
}