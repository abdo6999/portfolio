import { Component, ViewChild, ElementRef } from '@angular/core';
import { faStar,faBars,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  faStar = faStar
  active: boolean = false;
  faBars = faBars
  
  @ViewChild ('card') private card!:ElementRef;
  @ViewChild ('icon') private icon!:ElementRef;
  Anim(){
    let c:HTMLElement = this.card.nativeElement
    let i:HTMLElement = this.icon.nativeElement.children.item(0)?.children.item(0)
    i.classList.add('fa-spin-fast')
    if (c.classList.contains('mc-active')){
      c.classList.remove('mc-active');
      setTimeout(() => {
        this.faBars = faBars
        i.classList.remove('fa-spin-fast')
        i.classList.add('fa-bars')
      }, 800);
    }else {
      c.classList.add('mc-active');
      setTimeout(() => {
        this.faBars = faArrowLeft
        i.classList.remove('fa-spin-fast')
        i.classList.add('fa-arrow-left')
      }, 800);
    }
  }
}
