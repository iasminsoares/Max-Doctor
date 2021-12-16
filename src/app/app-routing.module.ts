import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component'
import { MaxDoctorComponent } from './paginas/max-doctor/max-doctor.component'

const routes: Routes = [
{path: 'maxDoctor', component: MaxDoctorComponent},
{path: '', component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
