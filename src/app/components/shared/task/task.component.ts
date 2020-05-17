import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-task',
  template: `
    <div
      class="task"
      (mouseover)="showDeleteIcon = true"
      (mouseleave)="showDeleteIcon = false"
    >
      <h3>
        <ng-content></ng-content>
      </h3>
      <span
        *ngIf="showDeleteIcon"
        class="delete-icon"
        (click)="removeTask.emit(true)"
      >
        <img src="../../assets/svg/remove.svg" />
      </span>
    </div>
  `,
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent {
  @Output() removeTask = new EventEmitter<boolean>(null);
  showDeleteIcon = false;
}
