import { Component, OnInit } from '@angular/core';
import info from 'src/assets/info';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects = info.projects;
  selectedProject: any;
  constructor() { }

  ngOnInit(): void {
  }

  isSelected(event: MouseEvent, project: any) {
    event.stopPropagation();
    this.selectedProject = project;
  }
}
