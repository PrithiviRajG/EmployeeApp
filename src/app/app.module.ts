import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, 
  MatToolbarModule, MatGridListModule,
  MatFormFieldModule, MatSelectModule,
  MatInputModule, MatDatepickerModule,
  MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material';
  import { FormsModule }   from '@angular/forms';

  import { ReactiveFormsModule } from '@angular/forms';
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
    MatNativeDateModule, ReactiveFormsModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
