import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
@Component({
  selector: 'app-covid-meter',
  templateUrl: './covid-meter.component.html',
  styleUrls: ['./covid-meter.component.css']
})
export class CovidMeterComponent implements OnInit {
 countryName:any;
 covidCount:any;
  constructor(private countryData:UsersService) {
    this.countryData.getCountryNames().subscribe((data)=>this.countryName=data);
    this.countryData.getCovidCount().subscribe(data=>this.covidCount=data);
   }
   getSlug(variable)
   {
     console.warn(variable);
   }
 
  ngOnInit() {
  }

}