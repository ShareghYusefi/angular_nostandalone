import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  // Create a FormGroup instance to bind form to.
  signInForm: FormGroup;

  // initialize form in contructor
  constructor(private formBuilderInstance: FormBuilder) {
    this.signInForm = formBuilderInstance.group({
      email: '',
      password: '',
      subscribe: false,
    });
  }

  onSubmit() {
    console.log(this.signInForm.value);
  }
}
