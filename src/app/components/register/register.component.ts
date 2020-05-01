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
  ) { }

  ngOnInit(): void {
    this.UUIDDisable=false
  }

  public OnSubmit(form: NgForm) {
    console.log(form.value)
    this.registerService.DoRegister(form.value)
  }
}
