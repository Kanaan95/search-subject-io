import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './modules/home/home.module';
import { SearchModule } from './modules/search/search.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResultsModule } from './modules/results/results.module';
import { SearchService } from './services/search.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HomeModule,
    SearchModule,
    ResultsModule,
    MaterialModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    SearchService
  ]
})
export class AppModule {}
