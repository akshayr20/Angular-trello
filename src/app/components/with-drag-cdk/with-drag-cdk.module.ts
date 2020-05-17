import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnWithCdkComponent } from './column/column.component';
import { WithDragCdkComponent } from './with-drag-cdk.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    SharedModule
  ],
  declarations: [ColumnWithCdkComponent, WithDragCdkComponent],
  exports: [WithDragCdkComponent],
})
export class WithDragCdkModule { }
