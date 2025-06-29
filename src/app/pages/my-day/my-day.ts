import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {  MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-my-day',
  imports: [FormsModule,CommonModule,RouterOutlet,MatFormField,MatLabel,MatDatepickerModule,MatInputModule,MatNativeDateModule],
  templateUrl: './my-day.html',
  styleUrl: './my-day.css',
})
export class MyDay {
taskArray = [{taskName:'Brush teeth',isCompleted:true,date: new Date()}];


onSubmit(form:NgForm){
 const taskValue = form.value;
  console.log('Form Data:', taskValue);
  
console.log(form);
this.taskArray.push({
  taskName:form.controls['task'].value,
  isCompleted:false,
  date:taskValue.date
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
