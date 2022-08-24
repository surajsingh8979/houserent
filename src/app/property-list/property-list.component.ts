import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array <any>=[
    {
    "Id": "1",
    "Name": "suraj",
    "Type": "House",
    "Price":"12000"
  },
  {
    "Id": "2",
    "Name": "singh",
    "Type": "House1",
    "Price":"13000"
  },
  {
    "Id": "3",
    "Name": "negi",
    "Type": "House3",
    "Price":"100"
  },
  {
    "Id": "4",
    "Name": "bd",
    "Type": "House23",
    "Price":"111000"
  },
  {
    "Id": "5",
    "Name": "yjj",
    "Type": "House75",
    "Price":"10000"
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
