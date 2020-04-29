import { Injectable } from '@angular/core';
import {ITask} from './task.model';
import { UUID } from 'angular2-uuid';
import { ThrowStmt } from '@angular/compiler';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,

} from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError, map, tap, timeout } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasksList: ITask[] = [];
  completedTasks: Array<any> = [];
  task: ITask;
  baseUrl = 'http://18.224.18.13:8005';
  apiUrl = this.baseUrl + '/api';
  constructor(private http: HttpClient) { }


  addNewTask(req) {
    let headers = new HttpHeaders();
    headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    return this.http.post<any>(this.apiUrl+'/task', req, { headers }).pipe(
      // if responce takes more than one minute
      timeout(60000),
      // ...errors if any
      catchError(this.handleError),
      // ...and calling .json() on the response to return data
      map(this.extractData)
    );
  }
  statusTask(req) {
    let headers = new HttpHeaders();
    headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    return this.http.patch<any>(this.apiUrl+'/task/' + req.id, req, { headers }).pipe(
      // if responce takes more than one minute
      timeout(60000),
      // ...errors if any
      catchError(this.handleError),
      // ...and calling .json() on the response to return data
      map(this.extractData)
    );
  }
  deleteTask(req) {
    let headers = new HttpHeaders();
    headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    return this.http.delete<any>(this.apiUrl+'/task/'+req.id, { headers}).pipe(
      // if responce takes more than one minute
      timeout(60000),
      // ...errors if any
      catchError(this.handleError),
      // ...and calling .json() on the response to return data
      map(this.extractData)
    );
  }
  clearAllTask() {
    let headers = new HttpHeaders();
    headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    return this.http.delete<any>(this.apiUrl+'/task/', { headers}).pipe(
      // if responce takes more than one minute
      timeout(60000),
      // ...errors if any
      catchError(this.handleError),
      // ...and calling .json() on the response to return data
      map(this.extractData)
    );
  }
  getTask(req) {
    let headers = new HttpHeaders();
    headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    return this.http.get<any>(this.apiUrl+'/task',  { headers, params:req }).pipe(
      // if responce takes more than one minute
      timeout(60000),
      // ...errors if any
      catchError(this.handleError),
      // ...and calling .json() on the response to return data
      map(this.extractData)
    );
  }
  /*
   * extractData function returns outer response
   */
  private extractData(res: any) {
    console.log(res);
    return res;
  }
   /*
   * handleError function for HTTP error handling
   */
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    } else {
      console.error('Server Side Error :', errorResponse);
          // Swal.fire(errorResponse.error.error_description);
    }
    // return an observable with a meaningful error message to the end user
    return throwError(
      errorResponse
      // "There is a problem with the service. We are notified & working on it. Please try again later."
    );
  }

}
