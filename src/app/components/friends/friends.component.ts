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
  displayedColumns: string[] = ['No', 'IslandsName', 'UserName','GameID'];
  applyColumns: string[] = ['No', 'IslandsName', 'UserName', "Confirm"];

  constructor(
    private friendService: FriendService,
    private registerService: RegisterService

  ) {
    this.UUID = this.registerService.GetUUID()
  }


  ngOnInit(): void {
    if (this.UUID!=undefined){

     this.friendService.GetFriendListSubject().subscribe((response:object[])=> {
       console.log(response)
       if (response!=undefined&&response.length>0){
        this.FriendList=response.filter(function(friend){
          return friend["Uuid"]!=this.UUID;
        }.bind(this))
       }
      });

      this.friendService.GetCheckFriendListSubject().subscribe((response:object[])=> {
        this.CheckFriendList=response
      });

      this.friendService.GetCheckFriendList(this.UUID);
      this.friendService.GetFriendList(this.UUID);
    }
  }

  AddFriend(){
    let payload={
      "User1":this.UUID,
      "User2":this.FriendUUID,
    };
    this.FriendUUID=undefined;
    this.friendService.AddFriend(payload);
  }

  ConfirmFriend(friendUUid:object){
    let payload={
      "User1":friendUUid,
      "User2":this.UUID,
    };
    this.friendService.ConfirmFriend(payload);

  }


  update() {
    this.friendService.GetCheckFriendList(this.UUID);
    this.friendService.GetFriendList(this.UUID);
  }
}
