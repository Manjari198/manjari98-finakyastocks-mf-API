import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';
import { Stock} from '../../shared/models/stock.model';


import {UserService} from '../../shared/user.service';
import { DataService } from  '../../data.service';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  public userDetails;

  private term:string="";
  text='';
  /*
  public stockz:Stock={
    Code : "",
    CompanyName : "",
    Description : "",
    Date_of_Record : null,
    Open : null,
    High : null,
    Low : null,
    Close : null,
    WAP : null,
    No_of_shares : null,
    No_of_trades : null,
    Total_Turnover : null,
    Deliverable_Quantity : null,
    Perc_Deli_Qty_To_Traded_Qty : null,
    Spread_H_L : null,
    Spread_C_O : null,
  }*/
  public stocks=[];
  constructor(location: Location,  private element: ElementRef, private router: Router, private userService: UserService, private data: DataService) {
    this.location = location;
  }


  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);

    this.userService.getUserProfile().subscribe(
      res=>{
        this.userDetails = res['user'];
      },
      err=>{}
    );
    /*
    this.data.getData().subscribe(data => {
      this.stocks=data;
      console.log(this.stocks);
      console.log("Stocks fetched");
    });*/
  }

  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

  logout(){
    this.userService.deleteToken();
    this.router.navigateByUrl('/login');
  }

  /*save(event) {
    console.log("You entered: ", event.target.value);
  }*/
  /*updateText(text)
  {
    this.data.getData().subscribe(data => {
      this.stocks=data;
      console.log(this.stocks);
      console.log("Stocks fetched");
    });
    this.data.updateData(text);
    this.data.updateDataz(this.stocks);
  }*/
  /*doSearch()
  {
    this.router.navigate(['stocksinfo',{term:this.term}])
  }*/
}

