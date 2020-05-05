import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { AddNewFeatureComponent } from './components/add-new-feature/add-new-feature.component';
import { BackendService } from './service/backend.service';

@NgModule({
  declarations: [AppComponent, AddNewFeatureComponent],
  imports: [BrowserModule, DragDropModule],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule {}
