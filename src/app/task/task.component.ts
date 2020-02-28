import { Component, OnInit } from "@angular/core";
import { ITask } from "./task.model";
import { from } from "rxjs";
import { UUID } from "angular2-uuid";
import { TaskService } from "./task.service";
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"]
})
export class TaskComponent implements OnInit {
  newTaskName$: any;
  tasksList: ITask[] = [];
  task: ITask = {};
  completedTasks: Array<any> = [];
  // activeTasks: Array<any> = [];
  itemLeft: number = 0;
  // variable use for current active tab
  isAllList: boolean;
  isActiveList: boolean = true;
  isCompletedList: boolean;
  constructor(public taskService: TaskService) {}

  ngOnInit() {}

  addNewTask() {
    // add new task into tasks list
    this.tasksList = this.taskService.addTask(this.newTaskName$);
    this.tasksList = (this.isCompletedList &&this.completedTasks.length)  ? this.completedTasks : this.tasksList;
    this.newTaskName$ = '';
    console.log(this.tasksList.length);
    this.itemLeft = this.tasksList.length;
    // this.activeTasks = this.tasksList;
  }
  completed(task: ITask) {
    this.completedTasks = this.taskService.taskCompleted(task);
    if(task.isCompleted) {
      this.tasksList = this.tasksList.filter(x => {
        return x.id !== task.id;
      });
    }
    if(this.isAllList && !this.task.isCompleted) {
      this.tasksList = this.tasksList.concat(this.completedTasks);
    }
    // this.completedTasks = this.tasksList;
    console.log(this.completedTasks.length);
    console.log(this.tasksList.length);

    this.itemLeft = this.tasksList.length;
    // this.activeTasks = this.tasksList;
    // this.tasksList.splice(index, 1);
    // this.activeTasks.splice(index, 1);
  }
  allTasks() {

    this.tasksList = this.taskService.getAllTasks();
    this.isAllList = true;
    this.isActiveList = false;
    this.isCompletedList = false;
  }
  getCompletedTasks() {

    this.completedTasks = this.taskService.getCompletedTasks();
    this.tasksList = this.completedTasks;
    this.isAllList = false;
    this.isActiveList = false;
    this.isCompletedList = true;
  }
  getActiveTasks() {
    this.tasksList = this.taskService.getActiveTasks();
    this.itemLeft = this.tasksList.length;
    this.isAllList = false;
    this.isActiveList = true;
    this.isCompletedList = false;
  }
  deleteTask(task: ITask) {
    this.tasksList = this.taskService.deleteTask(task);
  }
}
