import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Task} from "../task/task";

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent {

  private backupTask:Partial<Task> = { ... this.data.task };

  constructor( public dialogRef: MatDialogRef<TaskDialogComponent>, @Inject(MAT_DIALOG_DATA) public data:TaskDialogData) { }

  cancel(): void {
    this.data.task.title = <string>this.backupTask.title;
    this.data.task.description = <string>this.backupTask.description;
    this.dialogRef.close(this.data);
  }

}

export interface TaskDialogData {
  task:Task;
  enableDelete:boolean;
}

export interface TaskDialogResult {
  task:Task;
  delete?:boolean;
}
