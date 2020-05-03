import { Component, OnInit } from '@angular/core';
import { FriendService } from '../../services/friend/firend.service'
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  UUID: string
  FriendUUID: string
  FriendList: object[]
  CheckFriendList: object[]
  displayedColumns: string[] = ['No', 'IslandsName', 'UserName'];
  applyColumns: string[] = ['No', 'IslandsName', 'UserName', "Confirm"];

  constructor(
    private friendService: FriendService,
    private registerService: RegisterService

  ) {
    this.registerService.GetUserInfoSubject().subscribe((_userInfo) => {
      this.UUID = _userInfo["UUID"]
    })
  }


  ngOnInit(): void {

    this.friendService.GetCheckFriendList(this.UUID)
    this.friendService.GetFriendList(this.UUID)

    this.friendService.GetFriendListSubject().subscribe((response:object[])=> {
      this.FriendList=response.filter(function(friend){
        console.log(friend)

        return friend["Uuid"]!=this.UUID;
      }.bind(this));
    })
    this.friendService.GetCheckFriendListSubject().subscribe((response:object[])=> {
      this.CheckFriendList=response
    })
  }

  AddFriend(){
    let payload={
      "User1":this.UUID,
      "User2":this.FriendUUID,
      "Relationship":1
    }
    this.friendService.AddFriend(payload)
  }

  ConfirmFriend(friendUUid:object){
    let payload={
      "User1":friendUUid,
      "User2":this.UUID,
      "Relationship":2
    }
    this.friendService.ConfirmFriend(payload)

  }

}
