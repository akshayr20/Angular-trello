import { Injectable } from '@angular/core';
import { Column, Board } from '../models/board.model';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  board = new Board('New Project Name', [
    new Column('Backlog', [
      'Create Trello using Angular',
      'Create Trello using React',
    ]),
    new Column('In Progress', [
      'Create Trello using Angular  Test',
      'Create Trello using React  Test',
    ]),
    new Column('Done', ['Create Trello using Angular Test']),
  ]);

  constructor() {}

  createCard(newTask: string, column: Column) {
    if (newTask) {
      column.tasks.push(newTask);
    }
  }

  createColumn(columnName: string) {
    if (columnName) {
      const newColumn = new Column(columnName, []);
      this.board.columns.push(newColumn);
    }
  }
}
