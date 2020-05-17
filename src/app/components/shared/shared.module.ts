import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewFeatureComponent } from './add-new-feature/add-new-feature.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';

const Components = [AddNewFeatureComponent, HeaderComponent, TaskComponent];

@NgModule({
  declarations: Components,
  exports: Components,
  imports: [CommonModule],
})
export class SharedModule {}
