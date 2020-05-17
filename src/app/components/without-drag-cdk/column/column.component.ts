import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Column } from 'src/app/models';
import { DragDropService } from '../service/drag-drop/drag-drop.service';

@Component({
  selector: 'app-column-without-cdk',
  templateUrl: './column.component.html'
})
export class ColumnWithoutCdkComponent implements OnInit {
  @Input() column: Column;
  isDragging: boolean;

  constructor(
    private dragDropService: DragDropService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.isDragging = this.dragDropService.isDragging;
  }

  trackByFn(index: number, el: any): number {
    return el.id;
  }

  createTask(taskDesc: string, column: Column) {
    this.dataService.createTask(taskDesc, column);
  }

  removeTask(taskId: number, columnId: number) {
    this.dataService.removeTask(taskId, columnId);
  }

  dragover(ev) {
    ev.preventDefault();
  }

  dragStart(e, draggedTaskId, draggedColumnId) {
    this.dragDropService.dragStart(draggedTaskId, draggedColumnId);
  }

  dragEnd() {
    this.dragDropService.dragEnd();
  }

  moveInsideColumn(e, draggedOverTaskID, columnID) {
    if (this.dragDropService.draggedColumnId === columnID) {
      this.dragDropService.moveInsideColumn(draggedOverTaskID);
    }
  }

  moveToAnotherColumn(e, droppedColumnID) {
    e.preventDefault();
    if (this.dragDropService.draggedColumnId !== droppedColumnID) {
      this.dragDropService.moveToAnotherColumn(droppedColumnID);
    }
    this.dragDropService.dragEnd();
  }
}
