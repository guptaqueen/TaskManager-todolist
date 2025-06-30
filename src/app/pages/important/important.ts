import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDay } from '../my-day/my-day';
import { Sharedtask } from '../../sharedtask';


@Component({
  selector: 'app-important',
  imports: [CommonModule,MyDay],
  templateUrl: './important.html',
  styleUrl: './important.css'
})
export class Important {
importantTasks:any[]=[]

 constructor(private taskService: Sharedtask ) {}

  ngOnInit() {
    this.importantTasks = this.taskService.getImportantTasks();
    
  }
}
