import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.scss']
})
export class SkillsCardComponent implements OnInit {
  @Input() skill!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
