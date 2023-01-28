import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeUrl } from "@angular/platform-browser";

@Component({
  selector: 'app-card-skills',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardSkillsComponent implements AfterViewInit {
  @Input() front!: IconProp|undefined;
  @Input() svg!: string;
  @Input() back!: string;
  @ViewChild('font') public font!: ElementRef;
  constructor(private sanitizer: DomSanitizer) {}
  svgData!:SafeHtml ;
  ngAfterViewInit(): void {
    this.svgData = this.sanitizer.bypassSecurityTrustHtml(this.svg);;
  }

  
}
