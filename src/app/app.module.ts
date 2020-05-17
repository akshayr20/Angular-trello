import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WithDragCdkModule } from './components/with-drag-cdk/with-drag-cdk.module';
import { WithoutDragCdkModule } from './components/without-drag-cdk/without-drag-cdk.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WithDragCdkModule, WithoutDragCdkModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
