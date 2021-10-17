import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsTestsComponent } from './rxjs-tests.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RxjsTestsComponent,
  },
];

@NgModule({
  declarations: [RxjsTestsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RxjsTestsComponent],
})
export class RxjsTestsModule {}
