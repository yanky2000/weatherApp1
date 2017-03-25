import { HotelsService } from '../hotels.service';
import { MaterialModule } from '@angular/material';
import { SmediaComponent } from '../smedia/smedia.component';
import { WeatherDetailsComponent } from '../weather-details/weather-details.component';
import { HotelThumbnailComponent } from '../hotel-thumbnail/hotel-thumbnail.component';
import { HotelsListComponent } from '../hotels-list/hotels-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    HotelsListComponent,
    HotelThumbnailComponent,
    SmediaComponent,
    WeatherDetailsComponent
  ],
  declarations: [
    HotelsListComponent,
    HotelThumbnailComponent,
    SmediaComponent,
    WeatherDetailsComponent
  ], 
  providers: [
    HotelsService
  ]
})
export class HotelsModule { }
