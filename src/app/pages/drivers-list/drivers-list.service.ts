import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DriversList} from './drivers-list.interface';

@Injectable()
export class DriversListService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  postUser(model: DriversList): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/users', model);
  }
}
