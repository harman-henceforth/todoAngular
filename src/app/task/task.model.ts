export interface ITask {
  id?: any;
  taskName?: any;
  title?: any;
  completed:boolean;
  order: any;
  isCompleted?: boolean;
  isActive?: boolean;
};
// export class Task implements ITask {
//   constructor(
//     public id?: any,
//     public taskName?: any,
//     public isCompleted?: boolean,
//     public isActive?: boolean,

//   ) {
//     this.id = '';
//     this.taskName = taskName ? taskName : null;
//     this.isCompleted = isCompleted ? isCompleted : null;
//     this.isActive = isActive ? isActive : null;
//   }
// }
