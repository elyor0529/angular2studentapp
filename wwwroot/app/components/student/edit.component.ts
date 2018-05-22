import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, Router, RouteParams} from "angular2/router";
import {StudentModel}    from '../../models/studentModel';
import {StudentService} from '../../services/studentService';

@Component({
    selector: "student-edit",
    template: `<h2>Edit Student</h2>

    <form method="post" role="form" (ngSubmit)="onSubmit()">
        <div class="form-horizontal">

            <div class="form-group">
                <label for="firstName" class="col-md-2 control-label">First Name</label>
                <div class="col-md-10">
                    <input [(ngModel)]="student.firstName" type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group">
                <label for="lastName" class="col-md-2 control-label">Last Name</label>
                <div class="col-md-10">
                    <input [(ngModel)]="student.lastName" type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group">
                <label for="gender" class="col-md-2 control-label">Gender</label>
                <div class="col-md-10">
                    <input [(ngModel)]="student.gender" type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group">
                <label for="phoneNumber" class="col-md-2 control-label">Phone Number</label>
                <div class="col-md-10">
                    <input  [(ngModel)]="student.phoneNumber" type="tel" class="form-control" />
                </div>
            </div>

            <div class="form-group">
                <label for="dateOfBirth" class="col-md-2 control-label">Date Of Birth</label>
                <div class="col-md-10">
                    <input  [(ngModel)]="student.dateOfBirth"  type="date" class="form-control" />
                </div>
            </div>

            <div class="form-group">
                <label for="email" class="col-md-2 control-label">E-mail</label>
                <div class="col-md-10">
                    <input  [(ngModel)]="student.email"  type="email" class="form-control" />
                </div>
            </div>

            <div class="form-group">
                <label for="address" class="col-md-2 control-label">Address</label>
                <div class="col-md-10">
                    <textarea  [(ngModel)]="student.address" class="form-control"></textarea>
                </div>
            </div>

            <div class="form-group">
                <div class="col-md-offset-2 col-md-10">
                    <input type="submit" value="Save" class="btn btn-default" />
                </div>
            </div>
        </div>
    </form>

   <p>
       <a href="" [routerLink]="['StudentList']" class="btn btn-lin">Back to List</a>
   </p>
`,
    directives: [ROUTER_DIRECTIVES],
    providers: [StudentService],
    viewProviders: [StudentModel]
})
export class StudentEditComponent implements OnInit {
    id: string;

    constructor(public student: StudentModel, private service: StudentService, private router: Router, params: RouteParams) {
        this.id = params.get("id");
    }

    ngOnInit() {
        this.service.get(this.id)
            .subscribe(data => this.student = data);
    }

    onSubmit() {

        console.log(this.student);

        this.service.edit(this.id, this.student).subscribe(data => {
            this.router.navigate(['/student-list']);
        });

    }
}
