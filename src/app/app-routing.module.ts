import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent} from 'src/app/task/task.component';

const routes: Routes = [
  { path: '', component: TaskComponent, data: {type: ''}},
  { path: 'all', component: TaskComponent, data: {type: ''}},
  { path: 'active', component: TaskComponent, data: {type: 0}},
  { path: 'completed', component: TaskComponent, data: {type: 1}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
