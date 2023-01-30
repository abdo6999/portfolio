import { Component, ViewChild, ElementRef, Input } from '@angular/core';
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() title!:string;
  @Input() description!:string;
  @Input() Links!:string;
  @Input() img!:string;

  @ViewChild ('card') private card!:ElementRef;
  @ViewChild ('icon') private icon!:ElementRef;
  Anim(){
    let c:HTMLElement = this.card.nativeElement
    let i:HTMLElement = this.icon.nativeElement.children.item(0)
    i.classList.add('fa-spin-fast')
    if (c.classList.contains('mc-active')){
      c.classList.remove('mc-active');
      setTimeout(() => {
        i.classList.remove('fa-arrow-left','fa-spin-fast')
        i.classList.add('fa-bars')
      }, 800);
    }else {
      c.classList.add('mc-active');
      setTimeout(() => {
        i.classList.remove('fa-bars','fa-spin-fast')
        i.classList.add('fa-arrow-left')
      }, 800);
    }
  }
}
// <h4>
// Links
// </h4>
// <a class="fa fa-fw fa-facebook icon-item"></a>
// <a class="fa fa-fw fa-twitter icon-item"></a>
// <a class="fa fa-fw fa-linkedin icon-item"></a>
// <a class="fa fa-fw fa-google-plus icon-item"></a>