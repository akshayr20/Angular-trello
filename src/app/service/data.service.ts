import { Injectable } from '@angular/core';
import { Column, Board, Task } from '../models/board.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // DummyData

  task = new Task(Date.now(), 'Create Trello using Angular');

  column = new Column(Date.now() + 14, 'Todo', [this.task]);

  board = new Board(Date.now(), 'New Project', [this.column]);

  constructor() {}

  fetchBoard() {
    // Fetch Data from some backend;
    console.log(this.board);
  }

  saveBoard() {
    // save Data to some backend;
    setTimeout(() => {
      console.log(this.board);
    }, 100);
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

  getColumnById(columnID): Column {
    return this.board.columns.find(({ id }) => id === columnID);
  }
}
