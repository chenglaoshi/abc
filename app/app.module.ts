import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent01 } from './myc01';
import { MyComponent02 } from './myc02.component';
import { MyComponent04 } from './myc04.component';
import { MyComponent05 } from './myc05/myc05.component';
import { Myc06Component } from './myc06/myc06.component';
import { Myc07Component } from './myc07/myc07.component';
import { Myc10Component } from './myc10/myc10.component';
import { Myc11Component } from './myc11/myc11.component';
import { Myc12Component } from './myc12/myc12.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent01,
    MyComponent02,
    MyComponent04,
    MyComponent05,
    Myc06Component,
    Myc07Component,
    Myc10Component,
    Myc11Component,
    Myc12Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
