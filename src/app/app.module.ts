import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HotelsListComponent } from './hotels/hotels-list/hotels-list.component';
import { HotelThumbnailComponent } from './hotels/hotel-thumbnail/hotel-thumbnail.component';
import { SmediaComponent } from './smedia/smedia.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { HotelsService } from './hotels/hotels.service';

@NgModule({
  declarations: [
    AppComponent,
    HotelsListComponent,
    HotelThumbnailComponent,
    SmediaComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
    
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
