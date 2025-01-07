import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
const routes: Routes = [
  /*{
    path:'', 
    component: LoginComponent
  },
  {
    path: 'users',
    component: UsersListComponent

  }, */
  {
    path:'public',
    loadChildren: ()=> import ('./public/public.module').then(m => m.PublicModule)
  },
  {
    path: '**',
    redirectTo: 'public',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
