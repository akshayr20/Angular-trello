import { Component } from '@angular/core';
import { DataService } from './service/data.service';
import { Board, Column } from './models/board.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  withCdk = false;
  board: Board;
  constructor(private dataService: DataService) {
    this.board = this.dataService.board;
  }

  createTask(taskDesc: string, column: Column) {
    if (taskDesc && column) {
      this.dataService.createCard(taskDesc, column);
    }
  }

  createColumn(columnName: string) {
    if (columnName) {
      this.dataService.createColumn(columnName);
    }
  }
}
