import { Component, OnInit } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import {MessageService} from "primeng/api";
import {ValidationService} from "../../services/validation.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [MessageService]
})
export class SignInComponent implements OnInit {
  mobile:string="";
  password:string="";
  constructor(private recaptchaV3Service: ReCaptchaV3Service,
              private messageService: MessageService,
              private _validation: ValidationService
  ) { }
  ngOnInit(): void {
  }
  signInBtn() {
    // this.recaptchaV3Service.execute('importantAction')
    //   .subscribe((token) => {
    //     console.log(token)
    //   });
    if(!this._validation.isEmpty(this.mobile)){
      this.messageService.add({severity:'error', summary: 'خطا', detail: 'شماره موبایل خالیه'});
    } else if(!this._validation.charactersBe(this.mobile.length , 11 , '')){
      this.messageService.add({severity:'error', summary: 'خطا', detail: 'شماره موبایل اشتباهه'});
    } else if(this.mobile.substring(0, 2) !== '09'){
      this.messageService.add({severity:'error', summary: 'خطا', detail: 'فرمت شماره موبایل اشتباهه'});
    } else if(!this._validation.isEmpty(this.password)){
      this.messageService.add({severity:'error', summary: 'خطا', detail: 'کلمه عبور خالیه'});
    } else if(!this._validation.charactersBe(this.password.length , 8 , 'unlimited')){
      this.messageService.add({severity:'error', summary: 'خطا', detail: 'کلمه عبور کم تر از 8 کاراکتر است'});
    } else {
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
      this.mobile = ""
      this.password = ""
    }
  }
  keydown(e: KeyboardEvent):boolean {
    return this._validation.isNumberKey(e)
  }
}
