import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { AddNewFeatureComponent } from './components/add-new-feature/add-new-feature.component';
import { WithDragCdkComponent } from './with-drag-cdk/with-drag-cdk.component';
import { WithoutDragCdkComponent } from './without-drag-cdk/without-drag-cdk.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewFeatureComponent,
    WithDragCdkComponent,
    WithoutDragCdkComponent,
  ],
  imports: [BrowserModule, DragDropModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
