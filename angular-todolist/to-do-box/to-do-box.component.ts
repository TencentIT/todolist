import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-box',
  templateUrl: './to-do-box.component.html',
  styleUrls: ['./to-do-box.component.css']
})
export class ToDoBoxComponent implements OnInit {
  list=[];
  constructor() { }

  ngOnInit() {
  }

  handleSendEvent(msg){
    console.log("todobox收到的数据是",msg);
    this.list.unshift(msg);
    console.log("todobox里面的数组是",this.list);
  }

  delEvent(index){
    // console.log("todobox要删除的index----",index);
    this.list.splice(index,1);
    
  }
}
