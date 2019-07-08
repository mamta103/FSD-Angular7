import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItSectorComponent } from './it-sector/it-sector.component';
import { SoftwareDeveloperComponent } from './software-developer/software-developer.component';

@NgModule({
  declarations: [
    AppComponent,
    ItSectorComponent,
    SoftwareDeveloperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
   // bootstrap: [AppComponent]
  // bootstrap:[ItSectorComponent]
  bootstrap:[SoftwareDeveloperComponent]
})
export class AppModule { }
