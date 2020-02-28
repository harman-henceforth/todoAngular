import { Injectable } from '@angular/core';
import {ITask} from './task.model';
import { UUID } from 'angular2-uuid';
import { ThrowStmt } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasksList: ITask[] = [];
  completedTasks: Array<any> = [];
  task: ITask = {};
  constructor() { }

  addTask(taskName: any) {
    console.log(taskName);
    this.task.id = UUID.UUID(); // generate a random id;
    this.task.taskName = taskName;
    this.task.isCompleted = false;
    this.task.isActive = true;
    this.tasksList.push(this.task);
    this.task = {};
    console.log(this.tasksList);

    return this.tasksList;
  }
  taskCompleted(task: ITask) {
    // if task is not comppleted
    if(!task.isCompleted) {
      task.isCompleted = true;
      task.isActive = false;
      this.completedTasks.push(task);
      this.tasksList = this.tasksList.filter(x => {
        return x.id !== task.id;
      });
      console.log(this.completedTasks);

      return this.completedTasks;
    }
    // if task is already completed
    else {
      task.isCompleted = false;
      task.isActive = true;
      this.tasksList.push(task);
      return this.completedTasks = this.completedTasks.filter(x => {
        return x.id !== task.id;
      });

    }
    // this.completedTasks.push(taskName);
    // this.tasksList.splice(index, 1);
    // this.activeTasks.splice(index, 1);
  }
  getCompletedTasks() {
    return this.completedTasks;
  }
  getAllTasks() {
    return this.tasksList.concat(this.completedTasks);

  }
  getActiveTasks() {
    console.log(this.tasksList);
    this.tasksList =  this.tasksList.filter(x => {
     return x.isActive === true;
    });
    console.log(this.tasksList);
    return this.tasksList;
  }
  deleteTask(task: ITask) {
    if(!task.isCompleted) {
      this.tasksList = this.tasksList.filter(x => {
        return x.id !== task.id;
      });
      return this.tasksList;
    }else {
      this.completedTasks = this.completedTasks.filter(x => {
        return x.id !== task.id;
      });
      return this.completedTasks;
    }
  }
}
