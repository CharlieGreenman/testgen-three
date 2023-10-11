import { Component } from '@angular/core';

@Component({
  selector: 'testgen-three-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'testgen-three';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
