import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router  } from '@angular/router';
import {filter} from 'rxjs/operators';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(private router: Router ) { }
  active:Boolean = false;
  ngOnInit(): void {
    // active in case '/'
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          if (this.router.url === '/'){
              this.active = true
          }else{
            this.active = false
          }
        }
      }
    );
  }
  
  // toggle(el: Array<any>,target:HTMLElement ) {
  //   for (let i = 0 ; i < el.length ; i++){
  //     if (el[i].classList.contains('active') && el[i] !== target){
  //       el[i].classList.remove('active');
  //     }
  //   }
  //   target.classList.add('active')
  // }
}
