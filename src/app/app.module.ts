import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, 
  MatToolbarModule, MatGridListModule,
  MatFormFieldModule, MatSelectModule,
  MatInputModule, MatDatepickerModule,
  MatNativeDateModule} from '@angular/material';
  import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatGridListModule,
    MatFormFieldModule, MatSelectModule,
    MatInputModule, MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
