import { Component } from '@angular/core';
import { Counter, CounterInstance } from '@coding/counter';

@Component({
  selector: 'mimi-tailwind-test',
  template: `
    <section>
      <h2>Counter Tailwind: Example</h2>
      <p>{{ counter$.counter$() | async }}</p>
      <button (click)="pauseCounter(counter$)">Pause/Resume counter</button>
    </section>
  `,
  styles: [],
})
export class TailwindTestsComponent {
  counter$ = Counter();

  pauseCounter(counter: CounterInstance) {
    counter.pauseCounter();
  }
}
