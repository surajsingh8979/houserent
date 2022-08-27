import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule,  } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card/property-card.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from 'src/services/housing.service';
import { AddPropertyComponent } from './add-property/add-property.component';

const appRoutes: Routes=[
{path:'add-property', component:AddPropertyComponent},
{path:'', component:PropertyListComponent},
{path:'property-detail/:id', component:PropertyDetailComponent},
{path:'rent-property', component:PropertyListComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
      AddPropertyComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
