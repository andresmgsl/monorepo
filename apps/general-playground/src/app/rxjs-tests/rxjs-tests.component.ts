import { Component } from '@angular/core';
import { Counter, CounterInstance } from '@coding/counter';

@Component({
  selector: 'mimi-rxjs-test',
  template: `
    <section>
      <h2>Counter: Example</h2>
      <p>{{ counter$.counter$() | async }}</p>
      <button (click)="pauseCounter(counter$)">Pause/Resume counter</button>
    </section>
  `,
  styles: [],
})
export class RxjsTestsComponent {
  counter$ = Counter();

  pauseCounter(counter: CounterInstance) {
    counter.pauseCounter();
  }
}
