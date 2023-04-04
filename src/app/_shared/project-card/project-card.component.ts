import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project!:Project
  @Input() selectedProject!:Project
  close:boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.close)
  }
  closeOverlay(){
    if (this.selectedProject === this.project) {
      // If the same project is clicked twice, toggle showProjectDetails
      this.close = !this.close;
    } else {
      // If a different project is clicked, set the new project and show its details
      this.selectedProject = this.project;
      this.close = true;
    }
  }
}
export interface Project{
  title:string
  description:string
  github:string
  thumbnail:string
  type:string
  images?:string[]
  demo?:string
  use?:string[]
}