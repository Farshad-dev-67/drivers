import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {DriversListService} from './drivers-list.service';

@Injectable()
export class DriversListResolver implements Resolve<any>{

  constructor(private driversListService: DriversListService) { }

  resolve(): Observable<any> {
    return this.driversListService.getUser();
  }
}
