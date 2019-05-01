import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Employee } from './employee';

@Injectable()
export class EmployeeService{
    
    constructor(private _httpService: Http){}
 
    viewEmployees(): Observable<Employee[]>{
        return this._httpService.get("http://localhost:3000/viewEmployees")
                .map((response: Response) => response.json())
                .catch(this.handleError);
    }
 
    addEmployee(employee: Employee){
        let body = JSON.parse(JSON.stringify(employee));
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
            return this._httpService.post("http://localhost:3000/addEmployee", body, options);
    }
 
    private handleError(error: Response){
        return Observable.throw(error);
    }
}
