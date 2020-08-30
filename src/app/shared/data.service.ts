import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Stock} from "./models/stock.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient){}

  getStocks() {
    return this.http.get("./assets/data/api-data.json");
  }
  getData() {
    return this.http.post(environment.apiBaseURL+'/stocks','BOM500009');
  }
}
