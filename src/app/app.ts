import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Todolist } from './todolist/todolist';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';
import { Login } from './login/login';
import { Logout } from './logout/logout';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    
    Todolist,
    FormsModule,
    CommonModule,
    Navbar,
    RouterLink,
    RouterLinkActive,
    Login,
    Logout,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'TODO-list';
}
