import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { DataService } from '../../data.service';
import { NgModule } from '@angular/core';
import { CommonModule, getLocaleDateTimeFormat } from "@angular/common";
import { Stock } from "../../shared/models/stock.model";
import { vdate} from "../../shared/models/vdate.model"
//import { DatepickerServiceInputs } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service';


@NgModule({
  imports: [
    CommonModule
  ]
})

@Component({
  selector: 'app-stocksinfo',
  templateUrl: './stocksinfo.component.html',
  styleUrls: ['./stocksinfo.component.css']
})
export class StocksinfoComponent implements OnInit {
  //public dateterm:any={
    //day:null ,
    //month: null ,
    //year: null ,
    //di:"yes"
  //}
  public term:string="";
  public dateterm:vdate;
  text='';
  public stocks =[];
  public st =[];
   str=this.dateterm;
   public dt:string;
  //public datestring :string=this.dateterm.toDateString();

  
  constructor(private data: DataService, private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params =>{
      console.log(params);
      console.log(this.dateterm);
      //this.convDateString();
      //console.log(this.datestring);
      if(params['term'] ){
        this.onSearch(this.term,this.dateterm)
      }
    });
  }

  ngOnInit() {
    /*this.data.share.subscribe(x =>{
      this.text = x
    });
    this.data.sharez.subscribe(z=>{
      this.st=z;
    });*/
    
    /*this.data.getData("").subscribe(data => {
      this.stocks=data;
      console.log(this.stocks);
      console.log("Stocks fetched");
    });*/
    
  }
  convDateString()
  {
    //this.x=this.dateterm.split(' ');
    //this.dt=this.dateterm.year;
    console.log(this.dt);
  }
  doSearch()
  {
    if(this.dateterm){
    this.router.navigate(['stocksinfo',{term:this.term+'-'+this.dateterm.day+this.dateterm.month+this.dateterm.year}])
    }
    else{
      this.router.navigate(['stocksinfo',{term:this.term}])
    }
  }
  onSearch(term:string,dateterm:vdate)
  {
    if(dateterm)
    {
      console.log("getDatadate Triggered");
      console.log(this.dateterm.year+'-'+this.dateterm.month+'-'+this.dateterm.day);
      this.dt=this.dateterm.year+'-';
      if(this.dateterm.month=='1'|| this.dateterm.month=='2'|| this.dateterm.month=='3'|| this.dateterm.month=='4'|| this.dateterm.month=='5'|| this.dateterm.month=='6'||this.dateterm.month=='7'||this.dateterm.month=='8'|| this.dateterm.month=='9')
      {
        this.dt=this.dt + '0' + this.dateterm.month;
      }
      else{
        this.dt=this.dt + this.dateterm.month;
      }
      if(this.dateterm.day=='1' || this.dateterm.day=='2'|| this.dateterm.day=='3'|| this.dateterm.day=='4'|| this.dateterm.day=='5'|| this.dateterm.day=='6'|| this.dateterm.day=='7'|| this.dateterm.day=='8'|| this.dateterm.day=='9' )
      {
        this.dt= this.dt + '-0' + this.dateterm.day;
      }
      else{
        this.dt= this.dt  +'-'+ this.dateterm.day;
      }
      console.log(this.dt);
      this.data.getDatadate(term,this.dt).subscribe(data =>{
        this.stocks=data;
        console.log(this.stocks);
        console.log("Stocks fetched");
        console.log("getDatadate Triggered");
      });
    }

    else{
      console.log("getData Triggered");
    this.data.getData(term).subscribe(data =>{
      this.stocks=data;
      console.log(this.stocks);
      console.log("Stocks fetched");
      console.log("getData Triggered");
    });
    }
  }
}
