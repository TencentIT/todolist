import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  @Input() content=[];
  @Output() delIndex = new EventEmitter()
  constructor() { }

  ngOnInit() {
    console.log("todolist接受到了box传来的数据",this.content);
  }

  handleDeleteEvent(index){
   console.log("要删除的第"+index+"个元素");
   this.delIndex.emit(index);
  }
}
