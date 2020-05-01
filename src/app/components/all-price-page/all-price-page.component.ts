import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-price-page',
  templateUrl: './all-price-page.component.html',
  styleUrls: ['./all-price-page.component.scss']
})
export class AllPricePageComponent implements OnInit {


  CurrentPrice:object[]
  displayedColumns: string[] = ['IslandsName', 'UserName','Price','UUID'];
  constructor() { }

  ngOnInit(): void {
    this.CurrentPrice=
    [
      { "No":"1",
        "IslandsName" :"cht",
        "UserName"    :"sky",
        "Price":122,
        "UUID":"123123"
      },
      {
        "No":"2",
        "IslandsName" :"cht2",
        "UserName"    :"sky2",
        "Price":12,
        "UUID":"123123"
      },
      {
        "No":"3",
        "IslandsName" :"cht3",
        "UserName"    :"sky3",
        "Price":1,
        "UUID":"123123"
      },
    ]
  }

}
