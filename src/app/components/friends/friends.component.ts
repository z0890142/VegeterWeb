import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  FriendUUID:string
  constructor() { }
  FriendList:object[]
  displayedColumns: string[] = ['No','IslandsName', 'UserName'];

  ngOnInit(): void {
    this.FriendList=
      [
        { "No":"1",
          "IslandsName" :"cht",
          "UserName"    :"sky"
        },
        {
          "No":"2",
          "IslandsName" :"cht2",
          "UserName"    :"sky2"
        },
        {
          "No":"3",
          "IslandsName" :"cht3",
          "UserName"    :"sky3"
        },
      ]
  }

}
