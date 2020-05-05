import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FriendService {

  private FriendList = new Subject<object[]>();
  private CheckFriendList = new Subject<object[]>();

  private GameFriendList = new Subject<object[]>();
  private CheckGameFriendList = new Subject<object[]>();

  host="http://127.0.0.1:80"

  constructor(
    private http: HttpClient
  ) { }

  GetCheckGameFriendList(uuid:string) {
    let options = {
      headers:new HttpHeaders().set('Content-Type', 'text/json')
    };
    this.http.get<any>(this.host+"/v1/ApplyGameFriends/"+uuid,options)
    .subscribe(
      response => {
        this.CheckGameFriendList.next(response.ResultMessage)
      })
  }
  GetGameFriendList(uuid:string) {
    let options = {
      headers:new HttpHeaders().set('Content-Type', 'text/json')
    };
    this.http.get<any>(this.host+"/v1/GameFriends/"+uuid,options)
    .subscribe(
      response => {
        console.log(response.ResultMessage)
        this.GameFriendList.next(response.ResultMessage)
      })
  }

  GetCheckFriendList(uuid:string) {
    let options = {
      headers:new HttpHeaders().set('Content-Type', 'text/json')
    };
    this.http.get<any>(this.host+"/v1/AddFriends/"+uuid,options)
    .subscribe(
      response => {
        this.CheckFriendList.next(response.ResultMessage)
      })
  }

  GetFriendList(uuid:string) {
    let options = {
      headers:new HttpHeaders().set('Content-Type', 'text/json')
    };
    this.http.get<any>(this.host+"/v1/GetFriends/"+uuid,options)
    .subscribe(
      response => {
        this.FriendList.next(response.ResultMessage);
      });
  }

  AddGameFriend(payload:object){
    let options = {
      headers:new HttpHeaders().set('Content-Type', 'text/json')
    };
    this.http.post<any>(this.host+"/v1/ApplyGameFriend", payload, options);
  }

  AddFriend(payload:object){
    let options = {
      headers:new HttpHeaders().set('Content-Type', 'text/json')
    };
    this.http.post<any>(this.host+"/v1/AddFriends", payload, options).subscribe(
      response => {
       console.log(response)
      });
  }

  ConfirmGameFriend(payload:object){
    let options = {
      headers:new HttpHeaders().set('Content-Type', 'text/json')
    };
    this.http.put<any>(this.host+"/v1/ConfirmGameFriend", payload, options)
    .subscribe(
      response => {
        this.GetGameFriendList(payload["ToUUID"]);
      });
  }
  ConfirmFriend(payload:object){
    let options = {
      headers:new HttpHeaders().set('Content-Type', 'text/json')
    };
    this.http.put<any>(this.host+"/v1/ConfirmFriend", payload, options)
    .subscribe(
      response => {
        this.GetFriendList(payload["User2"])
        this.GetCheckFriendList(payload["User2"])

      })
  }


  GetFriendListSubject(): Subject<object> {
    return this.FriendList
  }
  GetCheckFriendListSubject(): Subject<object> {
    return this.CheckFriendList
  }

  GetGameFriendListSubject(): Subject<object> {
    return this.GameFriendList
  }
  GetCheckGameFriendListSubject(): Subject<object> {
    return this.CheckGameFriendList
  }




}
