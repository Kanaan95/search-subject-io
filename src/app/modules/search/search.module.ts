import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class SearchModule {}
