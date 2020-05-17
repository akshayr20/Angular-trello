import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithoutDragCdkComponent } from './without-drag-cdk.component';
import { ColumnWithoutCdkComponent } from './column/column.component';
import { DragDropService } from './service/drag-drop/drag-drop.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [WithoutDragCdkComponent, ColumnWithoutCdkComponent],
  exports: [WithoutDragCdkComponent],
  providers: [DragDropService],
})
export class WithoutDragCdkModule {}
