import { Injectable } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  myapiurl="https://api.covid19api.com/country/";
  constructor(private http:HttpClient)
  {}
  getCountryNames()
  {
    let url="https://api.covid19api.com/countries";
    return this.http.get(url);
  }
  getCovidCount()
  { let url="https://api.covid19api.com/world/total";
     return this.http.get(url);
  }
  getCovidData(temp:string)
  { 
    this.myapiurl+=temp;
  }
public userData:any[]=[];

collectData(userDetails:FormGroup)
{
  this.userData.push(userDetails);
}
getUserData()
{return this.userData;}
}
