import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {
    path : "login",
    component :LoginComponent
  },
  {
    path : "error",
    component :ErrorComponent
  },
  {
    path : "logout",
    component :LogoutComponent
  },
  {
    path : "",
    redirectTo : "/login",
    pathMatch : "full"
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
