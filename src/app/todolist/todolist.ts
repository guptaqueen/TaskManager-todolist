import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [FormsModule,CommonModule],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css'
})
export class Todolist {
taskArray = [{taskName:'Brush teeth',isCompleted:true}];


onSubmit(form:NgForm){
console.log(form);
this.taskArray.push({
  taskName:form.controls['task'].value,
  isCompleted:false
})
form.reset();
}

onDelete(index:number){
console.log(index);

this.taskArray.splice(index,1);
}

onCheck(index:number){
  console.log(this.taskArray);

  this.taskArray[index].isCompleted=!this.taskArray[index].isCompleted;
}


}
