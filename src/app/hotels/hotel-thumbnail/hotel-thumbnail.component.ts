import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-thumbnail',
  templateUrl: './hotel-thumbnail.component.html',
  styleUrls: ['./hotel-thumbnail.component.css']
})
export class HotelThumbnailComponent implements OnInit {

  @Input() hotel

  constructor() { }

  ngOnInit() {
  }

}
