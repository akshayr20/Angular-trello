import { Component, Input } from '@angular/core';
import { Column } from '../models/board.model';
import { DataService } from '../service/data.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-with-drag-cdk',
  templateUrl: './with-drag-cdk.component.html',
})
export class WithDragCdkComponent {
  @Input() column: Column;

  constructor(private dataService: DataService) {}

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
    this.dataService.saveBoard();
  }

  createTask(taskDesc: string, column: Column) {
    if (taskDesc && column) {
      this.dataService.createCard(taskDesc, column);
    }
  }
}
