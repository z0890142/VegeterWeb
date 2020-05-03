import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FriendService {

  private FriendList = new Subject<object[]>();
  private CheckFriendList = new Subject<object[]>();

  host="http://192.168.50.47:80"

  constructor(
    private http: HttpClient
  ) { }

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
        console.log(response.ResultMessage)
        this.FriendList.next(response.ResultMessage)
      })
  }

  AddFriend(payload:object){
    let options = {
      headers:new HttpHeaders().set('Content-Type', 'text/json')
    };
    this.http.post<any>(this.host+"/v1/AddFriends", payload, options)
    .subscribe(
      response => {
        console.log(response)
        this.GetCheckFriendList(payload["User1"])
      })
  }

  ConfirmFriend(payload:object){
    let options = {
      headers:new HttpHeaders().set('Content-Type', 'text/json')
    };
    this.http.put<any>(this.host+"/v1/ConfirmFriend", payload, options)
    .subscribe(
      response => {
        console.log(response)
        this.GetCheckFriendList(payload["User1"])
        this.GetFriendList(payload["User2"])
      })
  }


  GetFriendListSubject(): Subject<object> {
    return this.FriendList
  }
  GetCheckFriendListSubject(): Subject<object> {
    return this.CheckFriendList
  }
}
