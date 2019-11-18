import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMultiSelectGridComponent } from './mat-multi-select-grid/mat-multi-select-grid.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MatMultiSelectGridComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule
  ],
  exports: [MatMultiSelectGridComponent]
})
export class MatMultiSelectGridModule { }
