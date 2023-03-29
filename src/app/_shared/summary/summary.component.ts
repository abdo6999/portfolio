import { Component, OnInit } from '@angular/core';
import info from 'src/assets/info';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  paragraph:Array<string>=info.coverLatter
  constructor() { }

  ngOnInit(): void {
  }

}
