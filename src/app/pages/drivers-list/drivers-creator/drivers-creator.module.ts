import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DriversCreatorRoutingModule} from './drivers-creator-routing.module';
import {DriversCreatorComponent} from './drivers-creator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DriversListService} from '../drivers-list.service';


@NgModule({
  declarations: [DriversCreatorComponent],
  imports: [
    CommonModule,
    DriversCreatorRoutingModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    FormsModule,
  ],
  providers: [
    DriversListService
  ]
})
export class DriversCreatorModule {
}
