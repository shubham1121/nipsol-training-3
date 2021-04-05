import { Injectable } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http:HttpClient)
  {}
  getCountryNames()
  {
    let url="https://api.covid19api.com/countries";
    return this.http.get(url);
  }
public userData:any[]=[];

collectData(userDetails:FormGroup)
{
  this.userData.push(userDetails);
}
getUserData()
{return this.userData;}
}
