import {
  Component,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-add-feature',
  templateUrl: './add-feature.component.html',
  styleUrls: ['./add-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddFeatureComponent {
  // TODO: Can import Template/Reactive form Module in case more functionality is required.
  @ViewChild('newCardRef', { static: false }) newCardRef: ElementRef;
  @Output() create = new EventEmitter<string>(null);
  isFormOpen = false;

  closeForm() {
    this.isFormOpen = false;
  }

  emitTask() {
    const newTask = this.newCardRef.nativeElement.value;
    if (newTask) {
      this.create.emit(newTask);
    }
    this.closeForm();
  }
}
