import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as arweave from '@coding/arweave';
import { generateRustFile, IMetadata } from '@coding/codegenerator';
import * as ace from 'ace-builds';

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

      <h1>Generate Rust code</h1>
      <form [formGroup]="generateFileForm" (ngSubmit)="onSubmitGenerateFile()">
        <textarea
          name="json-text"
          type="text"
          aria-label="Arweave text uploader input"
          formControlName="jsonText"
        >
        </textarea>
        <button type="submit">Generate Code</button>
      </form>
      <textarea name="code" #editor></textarea>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('editor') private editor!: ElementRef<HTMLElement>;
  aceEditor!: ace.Ace.Editor;
  lastData = '';

  uploadForm = new FormGroup({
    uploadText: new FormControl(''),
  });

  generateFileForm = new FormGroup({
    jsonText: new FormControl(''),
  });

  ngAfterViewInit(): void {
    ace.config.set('fontSize', '16px');
    

    ace.config.set(
      'basePath',
      'https://unpkg.com/ace-builds@1.4.12/src-noconflict'
    );

    this.aceEditor = ace.edit(this.editor.nativeElement);
    this.aceEditor.session.setValue('Your code will be here');

    this.aceEditor.setTheme('ace/theme/twilight');
    this.aceEditor.session.setMode('ace/mode/rust');
  }

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

  onSubmitGenerateFile = () => {
    const json = JSON.parse(
      this.generateFileForm.value.jsonText
    ) as IMetadata;

    const resp = generateRustFile(json);

    console.log(resp.data);
    this.aceEditor.session.setValue(resp.data as string);
  };
}
