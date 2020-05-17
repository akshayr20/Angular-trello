import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Board } from 'src/app/models';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-without-drag-cdk',
  templateUrl: './without-drag-cdk.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithoutDragCdkComponent {
  board: Board;
  constructor(private dataService: DataService) {
    this.board = this.dataService.fetchBoard();
  }

  createColumn(columnName: string) {
    this.dataService.createColumn(columnName);
  }

  removeColumn(columnId: number) {
    this.dataService.removeColumn(columnId);
  }

  trackByFn(index: number, el: any): number {
    return el.id;
  }
}
