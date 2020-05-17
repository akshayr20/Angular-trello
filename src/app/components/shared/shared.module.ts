import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFeatureComponent } from './add-feature/add-feature.component';
import { HeaderComponent } from './header/header.component';
import { HighlightOrRemoveFeatureComponent } from './highlight-or-remove-feature/highlight-or-remove-feature.component';

const Components = [
  AddFeatureComponent,
  HeaderComponent,
  HighlightOrRemoveFeatureComponent,
];

@NgModule({
  declarations: Components,
  exports: Components,
  imports: [CommonModule],
})
export class SharedModule {}
