import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Post} from '../app.component';
import {AppTodoItemComponent} from "../app-todo-item/app-todo-item.component";


@Component({
  selector: 'app-app-todo-list',
  templateUrl: './app-todo-list.component.html',
  styleUrls: ['./app-todo-list.component.scss']
})
export class AppTodoListComponent implements OnInit {
  sendVisibility: boolean = false;

  @Output() messageEvent = new EventEmitter<boolean>();

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  text = '';

  constructor() { }

  ngOnInit(): void {

  }

  addPost(){
    if(this.text.trim()){
      const post: Post = {
        text: this.text
      }
      this.onAdd.emit(post);
      console.log('new case');
      this.text = '';
    }
  }

  sendMessage(){
    this.messageEvent.emit(this.sendVisibility);
    console.log('In app-todo-list.component ' + this.sendVisibility);
  }

  call(){
    this.addPost();
    this.sendMessage();
  }

}
