import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'drivers-list', loadChildren: () => import('./pages/drivers-list/drivers-list.module').then(m => m.DriversListModule) }, { path: 'drivers-creator', loadChildren: () => import('./pages/drivers-list/drivers-creator/drivers-creator.module').then(m => m.DriversCreatorModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
