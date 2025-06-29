import { Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Todolist } from './todolist/todolist';
// import { Login } from './login/login';
// import { Logout } from './logout/logout';
import { Account } from './pages/account/account';
import { Yourinfo } from './pages/yourinfo/yourinfo';


import { Security } from './pages/security/security';
import { Privacy } from './pages/privacy/privacy';
import { MyDay } from './pages/my-day/my-day';
import { Important } from './pages/important/important';
import { Tasks } from './pages/tasks/tasks';


export const routes: Routes = [
   {path:'navbar',component:Navbar},
  {path:'todolist',component:Todolist},

  


 
  {path:'account',component:Account},
  {path:'yourinfo',component:Yourinfo},
  
  {path:'security',component:Security},
  {path:'privacy',component:Privacy},
  {path:'my-day',component:MyDay},
  {path:'important',component:Important},
  {path:'task',component:Tasks}
];
