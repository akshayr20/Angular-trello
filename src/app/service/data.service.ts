import { Injectable } from '@angular/core';
import { Column, Board, Task } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // DummyData

  private task = new Task(Date.now(), 'Create Trello using Angular');

  private column1 = new Column(Date.now() + 10, 'Todo', [this.task]);
  private column2 = new Column(Date.now() + 20, 'Todo', []);
  private column3 = new Column(Date.now() + 30, 'Todo', []);

  private board = new Board(Date.now(), 'New Project', [
    this.column1,
    this.column2,
    this.column3,
  ]);

  constructor() {}

  fetchBoard() {
    const board = localStorage.getItem('board');
    if (board) {
      // TODO: USE index DB instead of local storage
      // Fetch ITEM based on selected projectID.
      this.board = JSON.parse(board);
    }
    return this.board;
  }

  saveBoard() {
    // TODO:  CREATE MULTIPLE BOARDS, save ITEM BY BOARD ID in indexDB
    const board = JSON.stringify(this.board);
    localStorage.setItem('board', board);
  }

  createTask(taskDesc: string, column: Column) {
    if (taskDesc && column) {
      column.tasks.push(new Task(Date.now(), taskDesc));
      this.saveBoard();
    }
  }

  removeTask(taskId: number, columnId: number) {
    const column = this.getColumnById(columnId);
    const taskIndex = this.getTaskIndexByColumnAndTaskId(column, taskId);
    column.tasks.splice(taskIndex, 1);
    this.saveBoard();
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

  getTaskIndexByColumnAndTaskId(column: Column, taskId): number {
    return column.tasks.findIndex(({ id }) => id === taskId);
  }


}
