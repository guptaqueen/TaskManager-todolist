import { Component } from '@angular/core';
import { MyDay } from '../my-day/my-day';

@Component({
  selector: 'app-account',
  imports: [MyDay],
  templateUrl: './account.html',
  styleUrl: './account.css'
})
export class Account {

}
