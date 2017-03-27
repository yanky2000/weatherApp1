import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})

export class HotelsListComponent {

  leasureToSearch: any

  public doFilter(term):void {
    this.leasureToSearch = term
  }

  @Input()
  hotels: Hotel[]

  @Input()
  leisureTypes: any

  @Output()
  hotelClicked = new EventEmitter()

  hotelClickedHandler(hotelId:number) {
    this.hotelClicked.emit(hotelId)
  }

}
