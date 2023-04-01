import { Component, Input, OnInit } from '@angular/core';
import info from 'src/assets/info';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  keys = Object.keys(info.about_me)
  values = Object.values(info.about_me)
  cvLink = info.links.cv
  @Input() gird!:boolean
  constructor() { }

  ngOnInit(): void {
  }


}
