import { Iproperty_interface } from './../property/Iproperty_interface';
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array <Iproperty_interface>;



  constructor(private housingservices: HousingService){}

  ngOnInit(): void {
     this.housingservices.getallproperties().subscribe(data=>{
      this.properties=data;
      console.log(data);
     },error=>
     console.log(error)
     )
  }}
