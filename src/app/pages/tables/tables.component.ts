import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";


@NgModule({
  imports: [
    CommonModule
  ]
})

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  public stocks= [];


  constructor(private data: DataService) { }

  ngOnInit() {
      console.log("Length 0")
      this.data.getStocks().subscribe
      (data => {
        this.stocks=data;
        console.log(this.stocks);
        console.log("Stocks fetched");
      });
  }

}
