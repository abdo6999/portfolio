import { Component } from '@angular/core';
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  faLinkedin = faLinkedin
  faGithub = faGithub

}
