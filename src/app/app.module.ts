import { HotelsModule } from './hotels/hotels/hotels.module';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HotelsModule,
    MaterialModule],

  bootstrap: [AppComponent]
})
export class AppModule { }
