import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import info from 'src/assets/info';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  links = info.links;
  name: string = '';
  email: string = '';
  message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public sendEmail(): void {
    const templateParams = {
      from_name: this.name,
      from_email: this.email,
      message: this.message
    };

    emailjs.send("service_kzr2kkb","template_izdr5lh", templateParams, 'F1APoqixtwh_KETbq')
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        this.name = '';
        this.email = '';
        this.message = '';
        alert('Your message has been sent. Thank you!');
      }, (error: any) => {
        console.log('FAILED...', error);
        alert('Sorry, there was an error sending your message. Please try again later.');
      });
  }

}
