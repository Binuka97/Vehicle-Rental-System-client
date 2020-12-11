import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewAllVehiclesComponent } from './view-all-vehicles/view-all-vehicles.component';

const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'ViewAllVehicles', component : ViewAllVehiclesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
