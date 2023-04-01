import { Component, Input, OnInit } from '@angular/core';
import info from 'src/assets/info';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() projects = info.projects;
  constructor() {}

  ngOnInit(): void {}
}
