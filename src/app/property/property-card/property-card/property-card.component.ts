import { Iproperty_interface } from './../../Iproperty_interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
@Input() property : Iproperty_interface

  constructor() { }

  ngOnInit(): void {
  }

}
