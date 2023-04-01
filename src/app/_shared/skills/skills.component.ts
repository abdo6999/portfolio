import { KeyValue } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import info from 'src/assets/info';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  collection = info.skills;
  values = info.skills;
  // get ref h1 for filter function
  @ViewChildren('refrans') h1: QueryList<ElementRef> | null = null;
  // get ref card for filter function
  @ViewChildren('card') card: QueryList<ElementRef> | null = null;
  constructor() {}
  ngOnInit(): void {}

  // return native elements from ref up
  findElemnt = () => {
    let el: Array<HTMLElement> = [];
    let nativeH: Array<HTMLElement> = [];
    let transform = this.card?.filter((ele) => {
      let element = ele.nativeElement as HTMLElement;
      el.push(element);
      return true;
    });
    transform = this.h1?.filter((ele) => {
      let element = ele.nativeElement as HTMLElement;
      nativeH.push(element);
      return true;
    });
    return { el, nativeH };
  };


  // filter element by category and toggole active class
  filterToggole($event: MouseEvent) {
    const target = $event.target as HTMLElement;
    const elemens = this.findElemnt();
    console.log(target)
    if (target.classList.contains('active')) {
      return null;
    }
    elemens.el.map((el) => {
      if (target.getAttribute('value')! !== el.getAttribute('value')) {
        el.style.display = 'none';
      } else {
        el.style.display = 'block';
      }
      if (target.getAttribute('value')! === 'All') {
        el.style.display = 'block';
      }
    });
    elemens.nativeH.map((el) => {
      if (el.classList.contains('active')) {
        el.classList.remove('active');
      }
    });
    target.classList.add('active');
    return null;
  }

  
  // order keyvalue 
  originalOrder = (
    a: KeyValue<string, string[]>,
    b: KeyValue<string, string[]>
  ): number => {
    return 0;
  };

}
