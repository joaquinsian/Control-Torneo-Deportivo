import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAllUsersComponent } from './components/admin/admin-all-users/admin-all-users.component';
import { IndexComponent } from './components/index/index.component';
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: "signin",
    component: SigninComponent
  },{
    path: "signup",
    component: SignupComponent
  },{
    path: "",
    component: IndexComponent
  },{
    path: "admin/all-users",
    component: AdminAllUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
