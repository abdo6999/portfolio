import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  @Input() skill!:string;
  @Input() key!:string;
  @Input() selectedKey!:string;
  ngOnInit(): void {}


}


/*  <div class="contant">

    <!-- filter to the skill like all , front end , back end -->
    <!-- <div class="header">
      <h1
        #refrans
        class="active icon"
        value="All"
        (click)="filterToggole($event)"
      >
        All
      </h1>
      <ng-container *ngFor="let c of collection | keyvalue : originalOrder">
        <h1
          #refrans
          (click)="filterToggole($event)"
          [attr.value]="c.key"
          class="icon"
          [ngClass]="c.key"
        >
          {{ c.key }}
        </h1>
      </ng-container>
    </div> -->
    
  </div>*/
