import { Component, ElementRef, Input, ViewChild, AfterViewInit,ChangeDetectorRef } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

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
  constructor(private sanitizer: DomSanitizer,private cdref: ChangeDetectorRef) {}
  svgData!:SafeHtml ;
  ngAfterViewInit(): void {
    this.svgData = this.sanitizer.bypassSecurityTrustHtml(this.svg);
    this.cdref.detectChanges();
  }

  
}
