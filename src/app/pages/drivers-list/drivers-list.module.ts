import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversListRoutingModule } from './drivers-list-routing.module';
import { DriversListComponent } from './drivers-list.component';
import {DriversListService} from './drivers-list.service';
import {DriversListResolver} from './drivers-list.resolver';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [DriversListComponent],
  imports: [
    CommonModule,
    DriversListRoutingModule,
    MatTableModule
  ],
  providers: [
    DriversListService,
    DriversListResolver,
  ]
})
export class DriversListModule { }
