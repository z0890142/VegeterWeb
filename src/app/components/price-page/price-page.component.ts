import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-page',
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.scss']
})
export class PricePageComponent implements OnInit {

  CurrentPrice:object[]
  OldPrice:object[]
  displayedColumns: string[] = ['IslandsName', 'UserName','Price'];
  mySelfPrice:number
  constructor() { }

  ngOnInit(): void {
    this.CurrentPrice=
    [
      { "No":"1",
        "IslandsName" :"cht",
        "UserName"    :"sky",
        "Price":122
      },
      {
        "No":"2",
        "IslandsName" :"cht2",
        "UserName"    :"sky2",
        "Price":122
      },
      {
        "No":"3",
        "IslandsName" :"cht3",
        "UserName"    :"sky3",
        "Price":122
      },
    ]
  }

}
