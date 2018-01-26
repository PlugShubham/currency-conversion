import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';
import { WeatherComponent } from './weather/weather.component';
import { ConversionComponent } from './conversion/conversion.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [
  {path:"", component:ConversionComponent},
  // {path:"places", component:PlacesComponent},
  // {path:"weather", component:WeatherComponent},
  //{path:"conversion", component:ConversionComponent},
  //{path:"blogs", component:BlogsComponent},
  {path:"**", component:ErrorpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
