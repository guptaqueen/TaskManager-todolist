import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todolist } from './todolist/todolist';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Todolist,FormsModule,CommonModule,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'TODO-list';
}
