import { Component } from '@angular/core';
import { MyDay } from '../my-day/my-day';

@Component({
  selector: 'app-tasks',
  imports: [MyDay],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {

}
