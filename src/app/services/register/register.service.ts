import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ) { }

test(){
  
}
  DoRegister(registerData:object) {
    
    let options = {
      headers:new HttpHeaders().set('Content-Type', 'text/json')
    };
    this.http.post<any>("http://127.0.0.1:80/v1/Register",registerData,options)
    .subscribe(
      response => {
        console.log(response)
      })

  }
}
