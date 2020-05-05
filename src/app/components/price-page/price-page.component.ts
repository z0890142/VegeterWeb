import { Component, OnInit } from '@angular/core';
import { PriceService } from '../../services/price/price.service';
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-price-page',
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.scss']
})
export class PricePageComponent implements OnInit {
  UUID: string
  CurrentPrice: object[]
  OldPrice: object[]
  displayedColumns: string[] = ['IslandsName', 'UserName', 'Price'];
  mySelfPrice: number
  constructor(
    private priceService: PriceService,
    private registerService: RegisterService

  ) { }

  ngOnInit(): void {
    this.UUID = this.registerService.GetUUID()
    this.priceService.GetPricesByUUID(this.UUID)
      .subscribe(
        response => {
          let allPrice = response.ResultMessage
          if (allPrice != undefined && allPrice.length > 0) {
            this.CurrentPrice = allPrice.filter(function (price) {
              return price["IsOverTime"] == false;
            });
            this.OldPrice = allPrice.filter(function (price) {
              return price["IsOverTime"] == true;
            });
          };

        })
  }

  AddPrice() {
    this.priceService.AddPrices(this.mySelfPrice)
      .subscribe(
        response => {
          if (response.ResultCode == "200") {
            this.mySelfPrice = undefined;
          }
        });
  }

  update() {
    this.UUID = this.registerService.GetUUID()
    this.priceService.GetPricesByUUID(this.UUID)
      .subscribe(
        response => {
          let allPrice = response.ResultMessage
          if (allPrice != undefined && allPrice.length > 0) {
            this.CurrentPrice = allPrice.filter(function (price) {
              return price["IsOverTime"] == false;
            });
            this.OldPrice = allPrice.filter(function (price) {
              return price["IsOverTime"] == true;
            });
          };
        })
  }

}
