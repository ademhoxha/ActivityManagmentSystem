import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';


// external components primeNG
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// external components angular material
//import {MatDatepickerModule} from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,

    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
