import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import { Stock } from './shared/models/stock.model';
import {vdate} from './shared/models/vdate.model'
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { DatepickerServiceInputs } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private content  = new BehaviorSubject<string>("Search");
  public share=this.content.asObservable();

  selectedstock : any ={
    Code : "BOM500002",
    CompanyName : "BOM500002",
  }

  
  private stock = new BehaviorSubject<Stock[]>(this.selectedstock);
  public sharez=this.stock.asObservable();

  

  

  noAuthHeader = { headers: new HttpHeaders({'NoAuth':'True'}) };
  constructor(private http: HttpClient){}

  getStocks(): Observable<Stock[]> {
    return this.http.post<Stock[]>(environment.apiBaseURL+"/sort",null,this.noAuthHeader);
  }
  getData(term:string) {
    return this.http.post<Stock[]>(environment.apiBaseURL+'/stocks',{Code: term,CompanyName:term});
    //return this.http.post<Stock[]>(environment.apiBaseURL+'/stocks',this.selectedstock);
  }
  getDatadate(term:string,dateterm:string){
    console.log("Data in getDatadate");
    console.log(dateterm);
    return this.http.post<Stock[]>(environment.apiBaseURL+'/stocks',{Code: term,CompanyName:term,RecDate:dateterm});
  }
  updateData(text){
    this.content.next(text);
  }
  updateDataz(stocks){
    this.stock=stocks;
  }
}
