import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { avoidWordValidator } from '../customValidation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent implements OnInit {
  // Create a FormGroup instance to bind form to.
  signInForm: FormGroup;

  // initialize form in contructor
  constructor(
    private formBuilderInstance: FormBuilder,
    private route: ActivatedRoute
  ) {
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

  // This method is called after the constructor when component is initialized in template.
  ngOnInit(): void {
    // get email from route parameter
    this.route.paramMap.subscribe((params) => {
      if (this.email) {
        this.email.setValue(params.get('email'));
      }
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
