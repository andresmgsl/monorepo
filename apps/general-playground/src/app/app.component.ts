import { Component } from '@angular/core';

@Component({
  selector: 'mimi-root',
  template: `
    <header class="flex">
      <h1>Welcome to the playground app!</h1>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
      header {
        background-color: red;
      }
    `,
  ],
})
export class AppComponent {}
