import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  // form
  {
    path: 'template-form',
    component: FormComponent,
  },
  // reactive form
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
  },
  // default route
  {
    path: '',
    redirectTo: '/template-form',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
