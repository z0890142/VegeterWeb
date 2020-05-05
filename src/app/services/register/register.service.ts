import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { FriendService } from '../friend/firend.service'

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  private userInfoSubject = new Subject<object>();

  constructor(
    private http: HttpClient,
    private friendService: FriendService
  ) { }

  host="http://127.0.0.1:80"
  
  DoRegister(registerData: object) {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'text/json')
    };

    this.http.post<any>(this.host+"/v1/Register", registerData, options)
      .subscribe(
        response => {
          registerData["UUID"] = response.ResultMessage
          this.StoreUserInfo(registerData)
          this.friendService.GetFriendList(response.ResultMessage)
          this.friendService.GetCheckFriendList(response.ResultMessage)
        })
  }

  StoreUserInfo(userInfo: object) {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    this.userInfoSubject.next(userInfo)
  }

  GetUserInfo() {
    let _userInfo = localStorage.getItem("userInfo")
    this.userInfoSubject.next(JSON.parse(_userInfo))
  }

  GetUserInfoSubject(): Subject<object> {
    return this.userInfoSubject
  }


  GetUUID(){
    let _userInfo = localStorage.getItem("userInfo")
    if (_userInfo==undefined){
      return ""
    }
    
    return JSON.parse(_userInfo).UUID
  }
}
