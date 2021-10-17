import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as arweave from '@coding/arweave';
import { Counter, CounterInstance } from '@coding/counter';

@Component({
  selector: 'coding-root',
  template: `
    <main>
      <h1>Upload a text with <b>Arweave</b></h1>
      <form [formGroup]="uploadForm" (ngSubmit)="onSubmitUpload()">
        <input
          name="upload-text"
          type="text"
          aria-label="Arweave text uploader input"
          formControlName="uploadText"
        />
        <button type="submit">Upload Now</button>
      </form>
      <button type="button" (click)="getLastData()">Get Last Data</button>
      <h3>{{ lastData }}</h3>

      <section>
        <h3>Counter 1: {{ counter$.counter$() | async }}</h3>
        <h3>Counter 2: {{ counterPair$.counter$() | async }}</h3>

        <button (click)="pauseCounter(counter$)">Pause counter 1</button>
        <button (click)="pauseCounter(counterPair$)">Pause counter 2</button>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lastData = '';
  counter$ = Counter();
  counterPair$ = Counter();

  uploadForm = new FormGroup({
    uploadText: new FormControl(''),
  });

  generateFileForm = new FormGroup({
    jsonText: new FormControl(''),
  });

  onSubmitUpload = () => {
    const text = this.uploadForm.value.uploadText;

    arweave.init().then((data) => {
      arweave
        .saveData(text, data.arweave, data.testWeave, data.walletKey)
        .then((data) => {
          console.log('Logradera', data);
        });
    });
  };

  getLastData = () => {
    arweave.init().then((data) => {
      arweave.getLastData(data.arweave).then((data) => {
        console.log(data);
        this.lastData = data.toString();
      });
    });
  };

  pauseCounter = (counter: CounterInstance) => {
    counter.pauseCounter();
  };
}
