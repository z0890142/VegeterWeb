import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  host="http://192.168.50.47:80"

  constructor(
    private http: HttpClient
  ) { }

  AddPrices(price:number) {
    let options = {
      headers:new HttpHeaders().set('Content-Type', 'text/json')
    };

    let userInfo = JSON.parse(localStorage.getItem("userInfo"))
    let payload={
      "UUID":userInfo["UUID"],
      "Price":price,
    }
    this.http.post<any>(this.host+"/v1/AddPrice/",payload,options)
    .subscribe(
      response => {
        console.log("addPrice : ",response)
      })
  }

  GetAllPrices() {
    let options = {
      headers:new HttpHeaders().set('Content-Type', 'text/json')
    };
    this.http.get<any>(this.host+"/v1/GrtAllPrice/",options)
    .subscribe(
      response => {
        console.log(response)
      })
  }
}
