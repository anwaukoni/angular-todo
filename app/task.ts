export class Task{
  public showEditBox : boolean;


  constructor(public title: string){
    this.title = title;
    this.showEditBox = false;
  }

}
