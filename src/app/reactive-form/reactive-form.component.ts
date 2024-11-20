import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  // Create a FormGroup instance to bind form to.
  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    subscribe: new FormControl(false),
  });
}
