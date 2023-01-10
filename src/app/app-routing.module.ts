import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { DetailsComponent } from './components/details/details.component';
import { ErrorComponent } from './components/error/error.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:"",component:UsersComponent},
  {path:"users",component:UsersComponent},
  {path:"add",component:AddUserComponent},
  {path:"update",component:UpdateUserComponent},
  {path:"delete",component:UsersComponent},
  {path:"details/:id",component:DetailsComponent},
  {path:"**",component:ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
