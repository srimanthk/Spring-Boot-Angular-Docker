import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { UnitComponent }  from './unit.component';
import { UnitConversionService } from './unit.service';

@NgModule({
  declarations: [
    AppComponent,
    UnitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UnitConversionService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
