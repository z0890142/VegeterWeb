import { Component,ViewChild } from '@angular/core';
import {AllPricePageComponent} from './components/all-price-page/all-price-page.component'
import {PricePageComponent} from './components/price-page/price-page.component'
import {FriendsComponent} from './components/friends/friends.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('allPrice') private allPrice:AllPricePageComponent;

  @ViewChild('currentPrice') private currentPrice:PricePageComponent;
  @ViewChild('friend') private friend:FriendsComponent;

  title = 'vegeterWeb';

  onTabChanged(event) {
    switch(event.index){
      case 0:
        this.allPrice.update();
      case 1:
        this.currentPrice.update();
      case 2:
        this.friend.update();
    }

  }

  


}
