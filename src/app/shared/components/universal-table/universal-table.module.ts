import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UniversalTableComponent} from '@shared/components/universal-table/universal-table.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [UniversalTableComponent],
  exports: [
    UniversalTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class UniversalTableModule {}
