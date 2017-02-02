import {Component} from "@angular/core";



@Component ({

  selector: "my-app",
  template: `
    <header class="navbar">
      <h1  class="navbar-header">
        Our Todo List!
      </h1>
    </header>
      <nav class="navbar navbar-inverse col-sm-3 todoListNav" [class.invisible]="listEmpty()">
        <ul class="list-group" style="margin-top:1em">
          <li style="cursor:pointer" class="list-group-item" *ngFor="let list of lists; let i = index"  >
            {{list}}
            <div *ngIf="showBox">
            <input  type="text"  [(ngModel)]="myModel" #editedTask="ngModel" placeholder="{{list}}" />
            </div>
            <span (click)="showEditbox(i)">Update </span>   <!-- updateTask(editedTask.value, i) -->
            <span (click)= "deleteTask(i)" style="float:right"> X </span>
          </li>
        </ul>

      </nav>
    <div class="jumbotron col-sm-9">
      <div >
      <input #task type="text"  class="text-center col-sm-12" style="color: white; background-color:transparent; border-width:0 0 1px 0; padding: 0.5em; margin-bottom:15px;" placeholder="New Task"/>
      <button (click)="addTask(task.value)" class="text-center btn btn-success" style="padding-right:5em; padding-left:5em; ">Add</button>
        <!--form class="form" (submit)=addTask(Task.value);>
            <textarea class="col-sm-12" placeholder="Say more about your task" style="background-color:transparent; border-width:0 0 1px 0; padding: 0.5em; background-color:rgba(230,230, 230, 0.2); color[placeholder]:white; margin-bottom:1em;">
            </textarea>
            <div class="col-sm-12 text-center">
              <input type="submit" class="text-center btn btn-success" style="padding-right:5em; padding-left:5em; "/>
            </div>
        </form-->
      </div>

    </div>

    <footer class="text-center">
      CopyRight &copy; 2017
    </footer>
  `
  ,
  styles: [`
    header {padding : 0 20px 0}
    .jumbotron{box-shadow : 0 5px 0 rgba(230, 230, 230, 0.6); }
    .todoListNav{margin:0 0 0 0;}
    .invisible{opacity:0;}
    `]
})

export class AppComponent {

  lists= ["Task1","Task2","Task3"];

  showBox:boolean=false;

  addTask(task: string){
    console.log(task);
    if(task){
      this.lists.push(task)
    }
    console.log(task);
  }

  deleteTask(index:number){
    this.lists.splice(index,1);
  }

  listEmpty(){
    return !this.lists.length;
  }

  showEditbox(index:number){
      if(this.showBox){
        this.showBox = false;
      }else{
        this.showBox = true;
      }
    return this.showBox;
  }

  updateTask (task, index){
      console.log(task,this.lists[index]);
      if(task){
        this.lists[index] = task;
      }
    }

  }

// lists = [{
//   "title":"Task 1",
//   "description":"Make Pudding",
//   "date": "today's date"
// },
// {
//   "title":"Task 2",
//   "description":"Make Pudding",
//   "date": "today's date"
// },
// {
//   "title":"Task 3",
//   "description":"Make Pudding",
//   "date": "today's date"
// }];
