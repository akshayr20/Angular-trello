import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-highlight-or-remove-feature',
  template: `
    <h3
      [ngClass]="className"
      (mouseover)="showDeleteIcon = true"
      (mouseleave)="showDeleteIcon = false"
    >
      <ng-content></ng-content>
      <span
        *ngIf="showDeleteIcon"
        class="delete-icon"
        (click)="removeFeature.emit(true)"
      >
        <img src="../../assets/svg/remove.svg" />
      </span>
    </h3>
  `,
})
export class HighlightOrRemoveFeatureComponent implements OnInit {
  @Output() removeFeature = new EventEmitter<boolean>(null);
  @Input() className = '';
  showDeleteIcon = false;

  constructor() {}

  ngOnInit(): void {}
}
