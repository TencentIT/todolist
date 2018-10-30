import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.css']
})
export class ToDoInputComponent implements OnInit {
  input_content=""  //双向数据绑定

  @Output() myInputEvent = new EventEmitter(); // EventEmitter事件触发器

  constructor() { }

  ngOnInit() {
  }

  AddContent(){
    this.myInputEvent.emit(this.input_content);
  }

}
