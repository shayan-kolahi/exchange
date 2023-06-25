import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }


  // sign-up
  signUpFirst_mobile:string='';
  signUpFirst_token:string='';
  signUpFirst(mobile : string, recaptcha_response : string){
    return this.http.post<any>( environment.baseUrl+'auth/register/signup/', { mobile : mobile, recaptcha_response : recaptcha_response })
  }
  signUpSecond(code:string,tracking_id:string,mobile:string){
    return this.http.post<any>( environment.baseUrl+'auth/register/verify/otp/', { code : code , tracking_id : tracking_id , mobile : mobile })
  }
  // sign-up


}
