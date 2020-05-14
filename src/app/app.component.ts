import { Component } from '@angular/core';
import { BackendService } from './service/backend.service';
import { Board, Column } from './models/board.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  withCdk = false;
  board: Board;
  constructor(private backEndService: BackendService) {
    this.board = this.backEndService.board;
  }

  createTask(taskDesc: string, column: Column) {
    if (taskDesc && column) {
      this.backEndService.createCard(taskDesc, column);
    }
  }

  createColumn(columnName: string) {
    if (columnName) {
      this.backEndService.createColumn(columnName);
    }
  }
}
