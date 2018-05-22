import {Http, Response, RequestOptions, Headers} from "angular2/http";
import { StudentModel }  from '../models/studentModel';
import { API_URL }  from '../config';
import { Injectable, Inject} from 'angular2/core';
import "rxjs/Rx";

@Injectable()
export class StudentService {

    constructor( @Inject(Http) private http: Http) {
    }

    list() {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(API_URL + "/list", options)
            .map((res: Response) => res.json() as StudentModel[]);
    }

    get(id: string) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(API_URL + "/get/" + id, options)
            .map((res: Response) => res.json() as StudentModel);
    }

    add(student: StudentModel) {
        let body = JSON.stringify(student);
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({
            headers: headers
        });

        return this.http.post(API_URL + "/add", body, options)
            .map((res: Response) => res.json());
    }

    edit(id: string, student: StudentModel) {
        let body = JSON.stringify(student);
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({
            headers: headers
        });

        return this.http.put(API_URL + "/edit/" + id, body, options)
            .map((res: Response) => res.json());
    }


}