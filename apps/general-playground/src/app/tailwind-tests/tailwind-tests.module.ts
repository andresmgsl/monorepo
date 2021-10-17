import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TailwindTestsComponent } from './tailwind-tests.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TailwindTestsComponent,
  },
];

@NgModule({
  declarations: [TailwindTestsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [TailwindTestsComponent],
})
export class TailwindTestsModule {}
