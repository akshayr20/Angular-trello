import {
  Component,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-add-new-feature',
  templateUrl: './add-new-feature.component.html',
  styleUrls: ['./add-new-feature.component.scss'],
})
export class AddNewFeatureComponent {
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
