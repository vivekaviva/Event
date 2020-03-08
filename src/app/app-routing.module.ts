import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderComponent } from './Admin/calender/calender.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path:'', component:LoginComponent},
  { path: 'login',component:LoginComponent},
  { path : 'calender', component: CalenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
