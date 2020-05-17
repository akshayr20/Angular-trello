import { Component } from '@angular/core';
import { Board } from 'src/app/models';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-without-drag-cdk',
  templateUrl: './without-drag-cdk.component.html',
})
export class WithoutDragCdkComponent {
  board: Board;
  constructor(private dataService: DataService) {
    this.board = this.dataService.fetchBoard();
  }

  createColumn(columnName: string) {
    this.dataService.createColumn(columnName);
  }

  trackByFn(index: number, el: any): number {
    return el.id;
  }
}
