import { Component, OnInit, Input} from '@angular/core';
import { Post} from '../app.component';


@Component({
  selector: 'app-app-todo-item',
  templateUrl: './app-todo-item.component.html',
  styleUrls: ['./app-todo-item.component.scss']
})
export class AppTodoItemComponent implements OnInit {
 @Input() visibility!:boolean; // получена переменная из сестринского child-компонента

  visibilityOfField: boolean = false; // вкл./выкл. видимость карточки (тег <p>)
  visibilityOfInput: boolean = true; // вкл./выкл. видимость тега input
  visibilityAll: boolean = false; // вкл./выкл. видимость всего блока div с тегами: <p>, <input>, <button>
  nameOfButton:string = 'Редактировать'; // надпись на кнопке
   private count = 0;

  @Input() post!: Post

  constructor() {}

  ngOnInit(): void {
  }


  //отслеживаем собития кнопки и изменяем надпись на ней и вызываем функции видимости
  clickButton(ev: any){
    this.count += ev.pointerId;
    if (this.count % 2 != 0) {
      this.nameOfButton = 'Изменить';
      this.changeVisibility_1();
      }
    else {
      this.nameOfButton = 'Редактировать';
      this.changeVisibility_2();
      }
  }

  // 2 функции, вызываемые в clickButton(); включаем input и выключаем тег <p> или наоборот:
  // выключаем input и включаем тег <p>
  changeVisibility_1(){
    this.visibilityOfField = true;
    this.visibilityOfInput = false;
  }
  changeVisibility_2(){
    this.visibilityOfField = false;
    this.visibilityOfInput = true;
  }

// оключаем сразу целый блок
  removeViaButton(){
    this.visibilityAll = true;
  }
}
