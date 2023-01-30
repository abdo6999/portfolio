import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() front!: string;
  @Input() back!: string;
  constructor(private sanitizer: DomSanitizer,private cdref: ChangeDetectorRef) {}
  HTMl!:SafeHtml ;
  ngAfterViewInit(): void {
    this.HTMl = this.sanitizer.bypassSecurityTrustHtml(this.front);
    this.cdref.detectChanges();
  }
}
