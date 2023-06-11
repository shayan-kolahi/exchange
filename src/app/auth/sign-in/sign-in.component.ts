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

  eee:string="";

  constructor(private recaptchaV3Service: ReCaptchaV3Service,
              private messageService: MessageService,
              private _validation: ValidationService
  ) { }

  ngOnInit(): void {
  }

  signInBtn() {
    this.recaptchaV3Service.execute('importantAction')
      .subscribe((token) => {
        console.log(token)
      });
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    this.messageService.addAll([{severity:'success', summary:'Service Message', detail:'Via MessageService'},
      {severity:'info', summary:'Info Message', detail:'Via MessageService'}]);

    console.log(this._validation.isEmpty(this.eee))

  }
}
