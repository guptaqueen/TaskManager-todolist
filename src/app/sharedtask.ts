import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class Sharedtask {
private allTasks:any[]= []
private importantTasks:any[]=[];

addTask(task: any) {
    this.allTasks.push(task);
  }

  getAllTasks() {
    return this.allTasks;
  }

  markAsImportant(task: any) {
    if (!this.importantTasks.includes(task)) {
      this.importantTasks.push(task);
    }
  }

  getImportantTasks() {
    return this.importantTasks;
  }

  removeTask(index: number) {
    this.allTasks.splice(index, 1);
  }

}
