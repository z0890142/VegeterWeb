import { Component, OnInit } from '@angular/core';
import {PriceService} from '../../services/price/price.service'
import { RegisterService } from '../../services/register/register.service';
import { FriendService } from '../../services/friend/firend.service'


@Component({
  selector: 'app-all-price-page',
  templateUrl: './all-price-page.component.html',
  styleUrls: ['./all-price-page.component.scss']
})
export class AllPricePageComponent implements OnInit {

  UUID:string
  CurrentPrice:object[]
  displayedColumns: string[] = ['IslandsName', 'UserName','Price','UUID','Apply'];
  constructor(
    private priceService:PriceService,
    private registerService: RegisterService,
    private friendService: FriendService,

  ) { 
    this.UUID = this.registerService.GetUUID()

  }

  ngOnInit(): void {
    this.priceService.GetAllPrices()
    .subscribe(
      response => {
        console.log(response)
        this.CurrentPrice=response.ResultMessage
      })
  
  }

  AddFriend(friendUUID:string){
    let payload={
      "User1":this.UUID,
      "User2":friendUUID,
    };
    this.friendService.AddFriend(payload);
  }

  update(){
    this.priceService.GetAllPrices()
    .subscribe(
      response => {
        this.CurrentPrice=response.ResultMessage
      })
  }

}
