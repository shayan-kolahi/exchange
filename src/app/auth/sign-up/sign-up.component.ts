import { Component, OnInit } from '@angular/core';
import {ReCaptchaV3Service} from "ng-recaptcha";
import {MessageService} from "primeng/api";
import {ValidationService} from "../../services/validation.service";
import {ApiService} from "../../services/api.service";
import {NgxOtpInputConfig} from "ngx-otp-input";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(private recaptchaV3Service: ReCaptchaV3Service,
              private messageService: MessageService,
              private _validation: ValidationService,
              private _api: ApiService
  ) { }
  mobile:string = "";
  isDisable:boolean = true;
  loading:boolean = false;
  levels:string = "firstStage";

  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,
    autofocus:true,
    autoblur:true,
    numericInputMode:true,
    classList: {
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disable-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class',
    },
  };
  handleFillEvent(value: string): void {
    console.log(value);
    console.log(this._api.signUpFirst_mobile);
    console.log(this._api.signUpFirst_token);
    this.isDisable = true;
    this.loading = true;
    this._api.signUpSecond(value , this._api.signUpFirst_token , this._api.signUpFirst_mobile).subscribe({
      next:data => {
        console.log('data' , data);
        this.loading = false;
      },
      error:err => {
        console.log('err' , err);
        this.loading = false;
        if(err.error.message === "The OTP code is not valid"){
          this.messageService.add({severity:'error', summary: 'خطا', detail: 'کد تایید اشتباهه'});
        }
        if(err.error.message === "The maximum number of otp trials exceeded"){
          this.messageService.add({severity:'error', summary: 'خطا', detail: 'مشکل در ارتباط با سرور ( رفرش کنید )'});
        }
        if(err.error.message === "The user already exists"){
          this.messageService.add({severity:'error', summary: 'خطا', detail: 'کاربر از قبل وجود دارد'});
        }
      },
      complete:() => {console.log('complete')}
    })
  }
  ngOnInit(): void {}
  signUpBtn() {
    if(!this._validation.isEmpty(this.mobile)){
      this.messageService.add({severity:'error', summary: 'خطا', detail: 'شماره موبایل خالیه'});
    } else if(!this._validation.charactersBe(this.mobile.length , 11 , '')){
      this.messageService.add({severity:'error', summary: 'خطا', detail: 'شماره موبایل اشتباهه'});
    } else if(this.mobile.substring(0, 2) !== '09'){
      this.messageService.add({severity:'error', summary: 'خطا', detail: 'فرمت شماره موبایل اشتباهه'});
    } else {
      this.loading = true;
      this.isDisable = true;
      this.recaptchaV3Service.execute('importantAction')
        .subscribe((token) => {
          this._api.signUpFirst(this.mobile,token).subscribe({
            next:data => {
              console.log('data' , data);
              this.levels = "secondStage";
              this.loading = false;
              this._api.signUpFirst_mobile = this.mobile;
              this._api.signUpFirst_token = data.message.token;
              console.log('this._api.signUpFirst_mobile',this._api.signUpFirst_mobile)
              console.log('this._api.signUpFirst_token',this._api.signUpFirst_token)
            },
            error:err => {
              console.log('err' , err);
              this.loading = false;
              this.isDisable = false;
              this.messageService.add({severity:'error', summary: 'خطا', detail: 'مشکل در ارتباط با سرور ( رفرش کنید )'});
            },
            complete:() => {console.log('complete')}
          })
        });

    }
  }
  keydown(e: KeyboardEvent):boolean {
    if(this.mobile.length === 11 && e.keyCode === 13) {
      this.signUpBtn()
    }
    return this._validation.isNumberKey(e)
  }
  keyup() {
    if (this.mobile.length === 11){
      this.isDisable = false
    } else {
      this.isDisable = true
    }
  }

  edit_mobile() {
    this.levels = 'firstStage'
  }
}
