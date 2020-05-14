import { Injectable } from '@angular/core';
import { Column, Board, Task } from '../models/board.model';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  // DummyData
  task = new Task(Date.now(), 'Create Trello using Angular');
  column = new Column(Date.now(), 'Done', [this.task]);
  board = new Board(Date.now(), 'New Project', [this.column]);

  constructor() {}

  fetchBoard() {
    // Fetch Data from some backend;
    console.log(this.board);
  }

  saveBoard() {
    // save Data to some backend;
    console.log(this.board);
  }

  createCard(taskDesc: string, column: Column) {
    if (taskDesc) {
      column.tasks.push(new Task(Date.now(), taskDesc));
      this.saveBoard();
    }
  }

  createColumn(columnName: string) {
    if (columnName) {
      this.board.columns.push(new Column(Date.now(), columnName, []));
      this.saveBoard();
    }
  }
}
