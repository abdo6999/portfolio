import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import info from 'src/assets/info';
@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
  active: string = 'All';
  skills = info.skills;
originalOrder = (a: KeyValue<string, string[]>, b: KeyValue<string, string[]>): number => {
  return 0;
}

  constructor() { }
  ngOnInit(): void {
    
  }
  isActive(btn: string) {
    return this.active === btn;
  }
}
