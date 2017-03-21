import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-smedia',
  templateUrl: './smedia.component.html',
  styleUrls: ['./smedia.component.css']
})
export class SmediaComponent implements OnInit {
  @Input() hotel
  constructor() { }

  ngOnInit() {
  }

}
