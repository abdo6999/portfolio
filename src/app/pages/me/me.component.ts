import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
  constructor() { }
   bool = true
  ngOnInit(): void {
    
  }
  toggole(ref:HTMLElement,span:HTMLElement){
    
    if(!span.classList.contains('active')){
      for (let i = 0; i < ref.children.length; i++) {
        if(ref.children[i].classList.contains('active')){
          ref.children[i].classList.remove('active')
        }
        span.classList.add('active');
      }
      this.bool = !this.bool
    }
  }
}
