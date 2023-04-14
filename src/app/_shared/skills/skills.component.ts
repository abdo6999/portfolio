import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import info from 'src/assets/info';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills = info.skills;
  active: string = 'All';
  ngOnInit(): void {}
  originalOrder = (a: KeyValue<string, string[]>, b: KeyValue<string, string[]>): number => {
    return 0;
  }
  isActive(btn: string) {
    return this.active === btn;
  }
}

