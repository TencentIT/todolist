import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() myValue=""
  @Output() deleteEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log("todoitem 接受到todolist的数据是：",this.myValue);
  }  

  handleClick(){
    this.deleteEvent.emit()
  }
}
