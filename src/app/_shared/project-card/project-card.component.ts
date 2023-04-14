import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() project!: Project;
  @Input() selectedProject!: Project|null;
  close: boolean = false;
  carouselConfig:any  ;
  @ViewChild('con') carousel!: any;
  @ViewChild('prevArrow') prevArrow!: ElementRef;
  @ViewChild('nextArrow') nextArrow!: ElementRef;

  constructor() {}




  ngOnInit(): void {
    if(this.project.images){
      this.project.images.unshift(this.project.thumbnail)
    }else {
      this.project.images = [this.project.thumbnail]
    }

  }

  openOverlay() {
    this.selectedProject = this.project;
    this.close = true;
  }
  closeOverlay() {
    this.close = false;
  }
}



// [ngStyle]="{'width.px': containerWidth}"
export interface Project {
  title: string;
  description: string;
  github: string;
  thumbnail: string;
  type: string;
  images?: string[];
  demo?: string;
  use?: string[];
}


