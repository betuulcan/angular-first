import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userInfo } from 'os';
import { HomeComponent } from './home/home.component';
import { RoleComponent } from './role/role.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:"home",
    loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path:"role",
    component:RoleComponent
  },
  {
    path:"user",
    component:UserComponent
  },
  {
    path:"user/:id",
    component:UserDetailComponent
  },
  //uyumsuz bir url girilirse
  {
    path:"**",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
