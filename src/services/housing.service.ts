import { Iproperty_interface } from './../app/property/Iproperty_interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private Http:HttpClient) { }
  getallproperties():Observable<Iproperty_interface[]>{
    return  this.Http.get(`data/properties.json`).pipe(
      map(data =>{
        const propertiesArray: Array <Iproperty_interface> =[];
        for(const id   in data){
          if(data.hasOwnProperty(id)){
          propertiesArray.push(data[id]);
        }
   }
   return propertiesArray;
   })
    );
  }
}
