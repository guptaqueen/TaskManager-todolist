import { Injectable } from '@angular/core';

export interface Task {
  taskName: string;
  date: Date;
  important: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class Sharedtask {
  private allTasks: Task[] = [];

  constructor() {
    this.loadFromLocalStorage();
    }

  addTask(task: Task) {
    this.allTasks.push(task);
    this.saveToLocalStorage(); 
  }

  getAllTasks(): Task[] {
    return this.allTasks;
  }

  markAsImportant(task: Task) {
    const found = this.allTasks.find(t => t === task);
    if (found) {
      found.important = true;
      this.saveToLocalStorage();
    }
  }

  getImportantTasks(): Task[] {
    return this.allTasks.filter(t => t.important === true);
  }

  removeTask(index: number) {
    this.allTasks.splice(index, 1);
    this.saveToLocalStorage();
  }

 
  private saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.allTasks));
  }

updateImportantStatus(task: Task): void {
  const found = this.allTasks.find(t => t === task);
  if (found) {
    found.important = task.important; 
    this.saveToLocalStorage(); 
  }
}



 
  private loadFromLocalStorage() {
    const stored = localStorage.getItem('tasks');
    if (stored) {
      this.allTasks = JSON.parse(stored).map((task: any) => ({
        ...task,
        date: new Date(task.date)
      }));
    }
  }
}
