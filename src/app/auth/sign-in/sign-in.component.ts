import { Component, OnInit } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [MessageService]
})
export class SignInComponent implements OnInit {

  constructor(private recaptchaV3Service: ReCaptchaV3Service,private messageService: MessageService) { }

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
  }
}
