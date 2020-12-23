import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DriversListComponent} from './drivers-list.component';
import {DriversListResolver} from './drivers-list.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {list: DriversListResolver},
    component: DriversListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversListRoutingModule {
}
