import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {SignInComponent} from "./sign-in/sign-in.component";

const routes: Routes = [
  {path: "", redirectTo: 'sign-in', pathMatch: 'full'},
  {path: "sign-in",component: SignInComponent,title: "ورود | صرافی ارز دیجیتال"},
  {path: "sign-up",component: SignUpComponent,title: "ثبت نام | صرافی ارز دیجیتال"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
