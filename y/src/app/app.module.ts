import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectComponent } from './object/object.component';
import { StringComponent } from './string/string.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { ArrayComponent } from './array/array.component';
import { ObsComponent } from './obs/obs.component';
import { Obs2Component } from './obs2/obs2.component';

@NgModule({
  declarations: [AppComponent, ObjectComponent, StringComponent, Example1Component, Example2Component, Example3Component, ArrayComponent, ObsComponent, Obs2Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
