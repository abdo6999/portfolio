import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project!:Project
  constructor() { }

  ngOnInit(): void {
  }

}
interface Project{
  title:string
  description:string
  github:string
  thumbnail:string
  type:string
  images?:string[]
  demo?:string
  use?:string[]
}