import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseComponent } from './house/house.component';
import { FormComponent } from './form/form.component';

@NgModule({
  // list of components, directives, and pipes that belong to this module
  declarations: [AppComponent, HouseComponent, FormComponent],
  // list of modules that are imported into this module
  imports: [BrowserModule, AppRoutingModule],
  // list of services that are provided by this module
  providers: [],
  // the root component that Angular creates and inserts into the index.html
  bootstrap: [AppComponent],
})
export class AppModule {}
