import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { ResultsComponent } from './results.component';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule],
  declarations: [ResultsComponent],
  exports: [ResultsComponent]
})
export class ResultsModule {}
