import { Component } from '@angular/core';
import { Board, Column } from './models/board.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-trello';

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
}
