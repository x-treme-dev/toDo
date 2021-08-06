import { Component, OnInit, Input} from '@angular/core';
import { Post} from '../app.component';


@Component({
  selector: 'app-app-todo-item',
  templateUrl: './app-todo-item.component.html',
  styleUrls: ['./app-todo-item.component.scss']
})
export class AppTodoItemComponent implements OnInit {
 @Input() visibility!:boolean;
  visibilityOfField: boolean = false;
  visibilityOfInput: boolean = true;


  @Input() post!: Post

  constructor() {}

  ngOnInit(): void {
  }
  changeVisibility(){
    this.visibilityOfField = true; //turn off field with notes
    this.visibilityOfInput = false; //turn on input for edit
  }

}
