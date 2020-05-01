import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  IslandsName:string
  UserName:string
  TimeZone:number
  UUID:string
  UUIDDisable:Boolean

  constructor(
    private registerService: RegisterService
  ) {
    this.registerService.GetUserInfoSubject().subscribe((_userInfo)=>{
      console.log(_userInfo)
      this.UUID=_userInfo["UUID"]
      this.TimeZone=_userInfo["TimeZone"]
      this.IslandsName=_userInfo["IslandsName"]
      this.UserName=_userInfo["UserName"]
    })
    this.registerService.GetUserInfo()
  }

  ngOnInit(): void {
    if (this.UUID!=undefined){

    }
  }
  

  public OnSubmit(form: NgForm) {
    this.registerService.DoRegister(form.value)
  }
}
