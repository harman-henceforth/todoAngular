import { Component, OnInit } from "@angular/core";
import { ITask } from "./task.model";
import { from } from "rxjs";
import { UUID } from "angular2-uuid";
import { TaskService } from "./task.service";
import { ThrowStmt } from '@angular/compiler';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { filter } from 'rxjs/operators';
@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"]
})
export class TaskComponent implements OnInit {
  newTaskName$: any;
  tasksList: ITask[] = [];
  task: ITask;
  completedTasks: Array<any> = [];
  // activeTasks: Array<any> = [];
  itemLeft: number = 0;
  // variable use for current active tab
  isAllList: boolean;
  isActiveList: boolean = true;
  isCompletedList: boolean;
  constructor(public taskService: TaskService, public route: ActivatedRoute, private router: Router) {
    const subscription = router.events.subscribe(e => {
      if(e instanceof NavigationEnd){
        console.log(e)
        this.getTasks();
        subscription.unsubscribe();
      }
    });

  }

  ngOnInit() {
    console.log(this.route.snapshot.data);
    // this.getTasks();

  }
  getTasks() {
    const request = {
      completed: this.route.snapshot.data.type
    }
    this.taskService.getTask(request).subscribe(res => {
      console.log(res);
      this.tasksList = res;

    })
  }
  addNewTask() {
    // add new task into tasks list
    if(this.newTaskName$) {
    const request = {
      title: this.newTaskName$
    }
    this.taskService.addNewTask(request).subscribe(res => {
      console.log(res);
      this.getTasks();
      this.newTaskName$ = '';
    })
  }

  }
  statusTask(task: ITask) {
    const request = {
      id: task.id,
      completed: task.completed ? 0 : 1,
      title: task.title,
      order: task.order
    }
    this.taskService.statusTask(request).subscribe(res=> {
      console.log(res);
      this.getTasks();

    })

  }
  deleteTask(task: ITask) {
    const request = {
      id: task.id,
      completed: task.completed ? 0 : 1,
      title: task.title,
      order: task.order
    }
    this.taskService.deleteTask(request).subscribe(res=> {
      console.log(res);
      this.getTasks();
    })
  }
  clearAllTask() {

    this.taskService.clearAllTask().subscribe(res=> {
      console.log(res);
      this.getTasks();
    })
  }


  activeRoute(routename: string): boolean{
    return this.router.url.indexOf(routename) > -1;
  }
}
