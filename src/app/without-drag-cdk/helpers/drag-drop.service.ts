import { Injectable } from '@angular/core';
import { Column } from '../../models/board.model';
import { DataService } from '../../service/data.service';

@Injectable({
  providedIn: 'root',
})
export class DragDropService {
  isDragging = false;
  draggedColumnId = null;
  draggedTaskId = null;

  constructor(private dataService: DataService) {}

  dragStart(draggedTaskId: number, draggedColumnId: number) {
    this.draggedTaskId = draggedTaskId;
    this.draggedColumnId = draggedColumnId;
    this.isDragging = true;
  }

  dragEnd() {
    this.isDragging = false;
    this.draggedColumnId = null;
    this.draggedTaskId = null;
    this.dataService.saveBoard();
  }

  getTaskIndexByColumnAndId(column: Column, taskId): number {
    return column.tasks.findIndex(({ id }) => id === taskId);
  }

  moveInsideColumn(draggedOverTaskID) {
    const { tasks } = this.dataService.getColumnById(this.draggedColumnId);

    const draggedTaskIndex = tasks.findIndex(
      ({ id }) => id === this.draggedTaskId
    );

    const draggedOverTaskIndex = tasks.findIndex(
      ({ id }) => id === draggedOverTaskID
    );

    // Destructuring Assignment
    [tasks[draggedOverTaskIndex], tasks[draggedTaskIndex]] = [
      tasks[draggedTaskIndex],
      tasks[draggedOverTaskIndex],
    ];
  }

  moveToAnotherColumn = (droppedColumnID: number) => {
    const draggedColumn = this.dataService.getColumnById(this.draggedColumnId);
    const droppedContainer = this.dataService.getColumnById(droppedColumnID);

    const draggedTaskIndex = this.getTaskIndexByColumnAndId(
      draggedColumn,
      this.draggedTaskId
    );

    droppedContainer.tasks.push(
      ...draggedColumn.tasks.splice(draggedTaskIndex, 1)
    );
  };
}
