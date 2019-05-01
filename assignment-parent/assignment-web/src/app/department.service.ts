import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Department } from './department';

@Injectable()
export class DepartmentService{
    
    constructor(private _httpService: Http){}

    viewDepartments(): Observable<Department[]>{
        return this._httpService.get("http://localhost:3000/viewDepartments")
                .map((response: Response) => response.json())
                .catch(this.handleError);
    }
 
    private handleError(error: Response){
        return Observable.throw(error);
    }
}
