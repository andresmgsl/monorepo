import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'test',
    loadChildren: () =>
      import('./rxjs-tests/rxjs-tests.module').then((m) => m.RxjsTestsModule),
  },
  {
    path: 'tailwind',
    loadChildren: () =>
      import('./tailwind-tests/tailwind-tests.module').then(
        (m) => m.TailwindTestsModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
