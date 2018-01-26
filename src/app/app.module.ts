import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlacesComponent } from './places/places.component';
import { ConversionComponent } from './conversion/conversion.component';
import { WeatherComponent } from './weather/weather.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

import 'hammerjs';
import { MaterialModule } from './material.module';
import { ConversionCalcComponent } from './conversion/conversion-calc/conversion-calc.component';
import { ConversionListComponent } from './conversion/conversion-list/conversion-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpacerPipe } from './spacer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlacesComponent,
    ConversionComponent,
    WeatherComponent,
    BlogsComponent,
    ErrorpageComponent,
    ConversionCalcComponent,
    ConversionListComponent,
    SpacerPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
