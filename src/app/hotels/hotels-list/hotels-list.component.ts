import { HotelsService } from '../hotels.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {
  
  hotels: any
  constructor(
    private hotelService: HotelsService
  ) { }

  ngOnInit() {
   this.hotels = this.hotelService.getHotels()
  }

  @Output() hotelClicked = new EventEmitter()

  setCurrentHotel(hotelId:number){
    console.log(this.hotelService.getHotel(hotelId).name)
    this.hotelClicked.emit(hotelId)
  }
}
