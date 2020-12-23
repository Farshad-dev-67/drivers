import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriversCreatorComponent } from './drivers-creator.component';

const routes: Routes = [{ path: '', component: DriversCreatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversCreatorRoutingModule { }
