import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { BackendService } from './service/backend.service';
import { Board, Column } from './models/board.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  board: Board;
  constructor(private backEndService: BackendService) {
    this.board = this.backEndService.board;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  createTask(task: string, column: Column) {
    if (task && column) {
      this.backEndService.createCard(task, column);
    }
  }

  createColumn(columnName: string) {
    if (columnName) {
      this.backEndService.createColumn(columnName);
    }
  }
}
