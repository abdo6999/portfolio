import { Component, OnInit } from '@angular/core';
import info from 'src/assets/info';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  liknks=info.links;
  constructor() { }

  ngOnInit(): void {
  }

}
