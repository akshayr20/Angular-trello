import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Column } from 'src/app/models';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-column-with-cdk',
  templateUrl: './column.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnWithCdkComponent {
  @Input() column: Column;
  @Output() removeColumn = new EventEmitter<number>(null);
  showDeleteIcon = false;

  constructor(private dataService: DataService) {}

  trackByFn(index: number, el: any): number {
    return el.id;
  }

  createTask(taskDesc: string, column: Column) {
    this.dataService.createTask(taskDesc, column);
  }

  removeTask(taskId: number, columnId: number) {
    this.dataService.removeTask(taskId, columnId);
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
    this.dataService.saveBoard();
  }
}
