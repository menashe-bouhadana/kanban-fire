import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Task} from "./task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task | any;
  @Output() edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
