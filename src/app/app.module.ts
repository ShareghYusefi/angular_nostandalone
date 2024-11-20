import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseComponent } from './house/house.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  // list of components, directives, and pipes that belong to this module
  declarations: [AppComponent, HouseComponent, FormComponent, ReactiveFormComponent],
  // list of modules that are imported into this module
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  // list of services that are provided by this module
  providers: [],
  // the root component that Angular creates and inserts into the index.html
  bootstrap: [AppComponent],
})
export class AppModule {}
