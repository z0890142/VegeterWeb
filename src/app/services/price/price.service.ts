import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  host="http://127.0.0.1:80"

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
    return this.http.post<any>(this.host+"/v1/AddPrice",payload,options)
    
  }

  GetAllPrices() {
    let options = {
      headers:new HttpHeaders().set('Content-Type', 'text/json')
    };
    return this.http.get<any>(this.host+"/v1/GetAllPrice",options)
  }


  GetPricesByUUID(uuid:string){
    let options = {
      headers:new HttpHeaders().set('Content-Type', 'text/json')
    };
    return this.http.get<any>(this.host+"/v1/GetCurrentPrice/"+uuid,options)
  }
}
