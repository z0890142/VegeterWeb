import { Component, OnInit } from '@angular/core';
import { FriendService } from '../../services/friend/firend.service'
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-game-friends',
  templateUrl: './game-friends.component.html',
  styleUrls: ['./game-friends.component.scss']
})
export class GameFriendsComponent implements OnInit {
  displayedColumns: string[] = ['No', 'IslandsName', 'UserName','GameID'];
  applyColumns: string[] = ['No', 'IslandsName', 'UserName', "Confirm"];
  GameFriendList:object[]
  CheckGameFriendList:object[]
  UUID:string
  GameUUID:string

  constructor(
    private friendService: FriendService,
    private registerService: RegisterService
  ) { 

    if (this.UUID!=undefined){
      this.friendService.GetCheckGameFriendList(this.UUID)
      this.friendService.GetGameFriendList(this.UUID)
  
      this.friendService.GetGameFriendListSubject().subscribe((response:object[])=> {
        this.GameFriendList=response.filter(function(gmaefriend){
          return gmaefriend["Uuid"]!=this.UUID;
        }.bind(this));
      })

      this.friendService.GetCheckGameFriendListSubject().subscribe((response:object[])=> {
        this.CheckGameFriendList=response
      })

    }
  }

  ngOnInit(): void {
  }

  AddGameFriend(){
    let payload={
      "Applicant":this.UUID,
      "ToUUID":this.GameUUID,
    }
    this.friendService.AddFriend(payload)
  }

  ConfirmFriend(gameUUID:object){
    let payload={
      "Applicant":this.UUID,
      "ToUUID":gameUUID,
    }
    this.friendService.ConfirmFriend(payload)

  }

}
