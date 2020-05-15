import { Component, Input, OnInit } from '@angular/core';
import { Column } from '../models/board.model';
import { DataService } from '../service/data.service';
import { DragDropService } from './helpers/drag-drop.service';

@Component({
  selector: 'app-without-drag-cdk',
  templateUrl: './without-drag-cdk.component.html',
})
export class WithoutDragCdkComponent implements OnInit {
  @Input() column: Column;
  isDragging: boolean;

  constructor(
    private dragDropService: DragDropService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.isDragging = this.dragDropService.isDragging;
  }

  createTask(taskDesc: string, column: Column) {
    this.dataService.createCard(taskDesc, column);
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
