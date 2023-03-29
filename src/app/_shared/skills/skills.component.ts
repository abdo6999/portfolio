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
  @Input() gird!: boolean;
  collection = info.skills;
  values = info.skills;
  @ViewChildren('ref') h1: QueryList<ElementRef> | null = null;
  @ViewChildren('card') card: QueryList<ElementRef> | null = null;
  constructor() {}
  ngOnInit(): void {}
  toggole($event: MouseEvent) {
    const list: Array<HTMLElement> = this.h1?.map(
      (res) => res.nativeElement
    ) as Array<HTMLElement>;
    const target: HTMLElement = $event?.target as HTMLElement;
    if (target.classList.contains('active')) {
      return false;
    }
    for (let i = 0; i < list.length; i++) {
      if (list[i].classList.contains('active')) {
        list[i].classList.remove('active');
      }
    }
    if (target.classList.contains('Back-End')) {
      const list: Array<HTMLElement> = this.card?.map(
        (res) => res.nativeElement
      ) as Array<HTMLElement>;
      list.map((res) => {
        if (!res.classList.contains('Back-End')) {
          res.style.display = 'none';
        } else {
          res.style.display = 'block';
        }
      });
    }
    if (target.classList.contains('Front-End')) {
      const list: Array<HTMLElement> = this.card?.map(
        (res) => res.nativeElement
      ) as Array<HTMLElement>;
      list.map((res) => {
        if (!res.classList.contains('Front-End')) {
          res.style.display = 'none';
        } else {
          res.style.display = 'block';
        }
      });
    }
    if (target.classList.contains('All')) {
      const list: Array<HTMLElement> = this.card?.map(
        (res) => res.nativeElement
      ) as Array<HTMLElement>;
      list.map((res) => {
        res.style.display = 'block';
      });
    }
    target.classList.add('active');
    return true;
  }
  originalOrder = (
    a: KeyValue<string, string[]>,
    b: KeyValue<string, string[]>
  ): number => {
    return 0;
  };
}
