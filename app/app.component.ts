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
      where content will be
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
    "title":"list one",
    "tasks": [],
    date: "today's date"
  },
  {
    "title":"list two",
    "tasks": [],
    date: "today's date"
  },
  {
    "title":"list three",
    "tasks": [],
    date: "today's date"
  }];

}
