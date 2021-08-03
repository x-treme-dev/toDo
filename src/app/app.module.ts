import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppTodoListComponent } from './app-todo-list/app-todo-list.component';
import { AppTodoItemComponent } from './app-todo-item/app-todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTodoListComponent,
    AppTodoItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
