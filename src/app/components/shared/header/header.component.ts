import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="heading heading__primary">
      <ng-content></ng-content>
    </header>
  `,
})
export class HeaderComponent {
  // TODO: Add Navbar to the header
}
