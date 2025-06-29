import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Todolist } from './todolist/todolist';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';



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
  
  RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'TODO-list';
}
