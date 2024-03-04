import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WeatherBackgroundComponent } from './weather-background/weather-background.component';
import { WeatherComponent } from './weather-background/weather/weather.component';
import { SearchComponent } from './weather-background/weather/search/search.component';
import { WeatherDailiesComponent } from './weather-background/weather/weather-dailies/weather-dailies.component';
import { WeatherHourliesComponent } from './weather-background/weather/weather-hourlies/weather-hourlies.component';
import { WeatherDailyFullInfoComponent } from './weather-background/weather/weather-daily-full-info/weather-daily-full-info.component';
import { WeatherHourlyWindComponent } from './weather-background/weather/weather-hourly-wind/weather-hourly-wind.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherBackgroundComponent,
    WeatherComponent,
    SearchComponent,
    WeatherDailiesComponent,
    WeatherHourliesComponent,
    WeatherDailyFullInfoComponent,
    WeatherHourlyWindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
