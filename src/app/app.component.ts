import { HotelsService } from './hotels/hotels.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  currentHotel:any
  
  constructor(
    private hotelsService: HotelsService
  ){}

  ngOnInit() {
    this.currentHotel = this.hotelsService.getHotel(1)
  }

  hotelClickedHandler(id) {
    this.currentHotel = this.hotelsService.getHotel(id)
  }
}
