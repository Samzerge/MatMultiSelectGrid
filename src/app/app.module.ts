import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMultiSelectGridModule } from 'projects/mat-multi-select-grid/src/public_api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeekDayPipe } from './week-day.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WeekDayPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatMultiSelectGridModule
  ],
  providers: [WeekDayPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
