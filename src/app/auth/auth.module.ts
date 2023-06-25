import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

import {InputTextModule} from 'primeng/inputtext';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from "ng-recaptcha";

import {ToastModule} from 'primeng/toast';
import {FormsModule} from "@angular/forms";
import {MessageService} from "primeng/api";
import {NgxOtpInputModule} from "ngx-otp-input";

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    InputTextModule,
    ToastModule,
    RecaptchaV3Module,
    FormsModule,
    NgxOtpInputModule
  ],
  providers: [{ provide: RECAPTCHA_V3_SITE_KEY, useValue: "6LeOMmofAAAAAJKCNHACNO_zd_M-aRCDsCFTt5uU" },MessageService],
})
export class AuthModule { }
