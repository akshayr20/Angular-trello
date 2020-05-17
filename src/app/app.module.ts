import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WithDragCdkModule } from './components/with-drag-cdk/with-drag-cdk.module';
import { WithoutDragCdkModule } from './components/without-drag-cdk/without-drag-cdk.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WithDragCdkModule, WithoutDragCdkModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  bootstrap: [AppComponent],
})
export class AppModule {}
