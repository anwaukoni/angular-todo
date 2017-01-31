import {Component} from "@angular/core";



@Component ({

  selector: "my-app",
  template: `
    <header class="navbar">
      <h1  class="navbar-header">
        Our Todo List!
      </h1>
    </header>
      <nav class="navbar navbar-inverse col-sm-3 todoListNav">
        <ul>
          <li *ngFor="let list of lists">
            {{list.title}}
          </li>
        </ul>

      </nav>
    <div class="jumbotron col-sm-9">
      <div >
        <form class="form" (submit)=addTask(Task.value);>
            <input type="text"  class="text-center col-sm-12" style="background-color:transparent; border-width:0 0 1px 0; padding: 0.5em; margin-bottom:15px;" placeholder="New Task" #Task/>
            <textarea class="col-sm-12" placeholder="Say more about your task" style="background-color:transparent; border-width:0 0 1px 0; padding: 0.5em; background-color:rgba(230,230, 230, 0.2); color[placeholder]:white; margin-bottom:1em;">
            </textarea>
            <div class="col-sm-12 text-center">
              <input type="submit" class="text-center btn btn-success" style="padding-right:5em; padding-left:5em; "/>
            </div>
        </form>
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
    `]
})

export class AppComponent {
  lists = [{
    "title":"Task 1",
    "description":"Make Pudding",
    "date": "today's date"
  },
  {
    "title":"Task 2",
    "description":"Make Pudding",
    "date": "today's date"
  },
  {
    "title":"Task 3",
    "description":"Make Pudding",
    "date": "today's date"
  }];
  addTask(task){
    console.log(task);
  }

}
