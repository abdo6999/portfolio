import { Component } from '@angular/core';
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
import {faFileLines} from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class summaryComponent {
  faLinkedin = faLinkedin
  faGithub = faGithub
  faFileLines = faFileLines
}
