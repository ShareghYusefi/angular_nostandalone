import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { avoidWordValidator } from '../customValidation';

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
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(5), avoidWordValidator],
      ],
      subscribe: false,
    });
  }

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }

  onSubmit() {
    console.log(this.signInForm.value);
  }
}
