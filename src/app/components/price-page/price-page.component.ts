import { Component, OnInit } from '@angular/core';
import { PriceService } from '../../services/price/price.service';

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
  constructor(
    private priceService:PriceService
  ) { }

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

  AddPrice(){
    console.log(this.mySelfPrice)
    this.priceService.AddPrices(this.mySelfPrice)
  }

}
