import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  email:any
  message:any
  constructor(private mail:MailService){}
    sendMail(){
      this.mail.sendMail(this.email, this.message);
    }
}
