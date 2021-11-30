/**
 * @description created a class component with the name ApiService
 * Connecting to the backend using url
 * @params {empObj}
 * @Return Apiurl
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly APIUrl = 'http://localhost:51584/swagger/api/Customer/Registration'; //Backend localhost link

  constructor(private _http: HttpClient) {}

  Signup(empObj: any) {
    console.log('empobj.....', empObj);
    return this._http.post<any>(this.APIUrl, empObj);
  }
  Login(empObj: any) {
    return this._http.get<any>(this.APIUrl, empObj);
  }
}
