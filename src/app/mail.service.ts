import { Injectable } from '@angular/core';
import  emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor() { }

  sendMail(email:any, message:any){
    let params:any = {}
    params.to_mail="jagerattila@gmail.com"
    params.reply_to="jagerattila@gmail.com"
    params.secret_to="kondormarcell@ktch.hu"

    params.from_name="BestApp"
    params.to_name="user"
    params.message="ejnye-bejnye"
    params.html_content="<h1>anya szeret</h1>"
    params.signature="Én"
    emailjs.send("service_9g5zu4e","template_zitrf0v", params, "n1mcwnIqVu35-1vP8").then(
      (res)=>console.log("Email ok", res)
    ).catch(
      (res)=>console.log("hiba",res)
    )
  }
}
