import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './@core/components/map/map.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
//import { SendRequest } from '@core/services'

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   //SendRequest,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
