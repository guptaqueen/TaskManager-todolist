import { Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Todolist } from './todolist/todolist';
import { Login } from './login/login';
import { Logout } from './logout/logout';

export const routes: Routes = [
   {path:'navbar',component:Navbar},
  //  {path:'',component:Navbar},
  {path:'todolist',component:Todolist},
  {path:'login',component:Login},
  {path:'logout',component:Logout}
];
