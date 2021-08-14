import {Component} from '@angular/core';

export interface Post{
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [
    {text: 'В 12:00 полить гибискус'},
    {text: 'В 18:25 выгуливаю хомячка'}
  ]

  transitVisibility!: boolean;

  updatePosts(post: Post){
    this.posts.unshift(post)
  }

  receiveMessage($event:any){
    this.transitVisibility = $event
  }
}
