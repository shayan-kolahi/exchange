import { Component, OnInit } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private recaptchaV3Service: ReCaptchaV3Service) { }

  ngOnInit(): void {
  }

  signInBtn() {
    this.recaptchaV3Service.execute('importantAction')
      .subscribe((token) => {
        console.log(token)
      });
  }
}
