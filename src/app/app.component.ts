import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-create-food></app-create-food>
    <app-list-food></app-list-food>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'observer';
}
