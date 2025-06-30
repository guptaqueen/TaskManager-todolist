import { Component } from '@angular/core';
import { MyDay } from '../my-day/my-day';

@Component({
  selector: 'app-important',
  imports: [MyDay],
  templateUrl: './important.html',
  styleUrl: './important.css'
})
export class Important {

}
