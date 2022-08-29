import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
public propertyId: number;
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.propertyId= Number(this.route.snapshot.params['id']);
  }
onSelectNext(){
  this.propertyId +=1;
  this.router.navigate(['property-detail',this.propertyId]);
}
}
