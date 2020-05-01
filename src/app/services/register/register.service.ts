import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  private userInfoSubject=new Subject<object>();

  constructor(
    private http: HttpClient
  ) { }


  DoRegister(registerData:object) {
    let options = {
      headers:new HttpHeaders().set('Content-Type', 'text/json')
    };
    
    this.http.post<any>("http://192.168.50.47:80/v1/Register",registerData,options)
    .subscribe(
      response => {
        registerData["UUID"]=response.ResultMessage
        this.StoreUserInfo(registerData)
      })
  }

  StoreUserInfo(userInfo:object){
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    this.userInfoSubject.next(userInfo)
  }

  GetUserInfo(){
    let _userInfo = localStorage.getItem("userInfo")
    this.userInfoSubject.next(JSON.parse(_userInfo))
  }

  GetUserInfoSubject():Subject<object>{
    return this.userInfoSubject
  }
}
