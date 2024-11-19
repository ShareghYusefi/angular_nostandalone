import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  
  email: string = '';
  password: string = '';
  subscribe: boolean = false;

  onSubmit(loginForm: any): void {
    console.log(loginForm.value);
  }
}
