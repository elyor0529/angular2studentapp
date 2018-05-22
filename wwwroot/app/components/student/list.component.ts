import {Component, OnInit } from "angular2/core";
import {StudentModel }  from '../../models/studentModel';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {StudentService} from '../../services/studentService';

@Component({
    selector: "student-list",
    template: `
        <h1>List of Students</h1>  
        <table class="table"> 
            <tr> 
                <th>Full Name</th>
                <th>Gender</th> 
                <th>Date Of Birth</th>  
                <th>Phone Number</th>  
                <th>E-mail</th>   
            </tr>    
            <tr *ngFor="#student of students">
                <td>
                    <a href="" [routerLink]="['StudentEdit',{'id':student.id}]" class="btn btn-link">
                     {{student.firstName}} {{student.lastName}}
                    </a>
                </td>
                <td>
                    {{student.gender}}
                </td>
                <td>
                    {{student.dateOfBirth}}
                </td>
                <td>
                    {{student.phoneNumber}}
                </td>
                <td>
                    {{student.email}}
                </td> 
            </tr> 
        </table>
        <p>
             <a href="" [routerLink]="['StudentAdd']" class="btn btn-primary">Add</a>
        </p>
        `,
    directives: [ROUTER_DIRECTIVES],
    providers: [StudentService]
})
export class StudentListComponent implements OnInit {
    students: StudentModel[];

    constructor(private service: StudentService) {
    }

    ngOnInit() {
        this.service.list()
            .subscribe(data => this.students = data);
    }
}
