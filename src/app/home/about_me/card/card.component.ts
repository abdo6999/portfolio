import { AfterViewInit, Component, ElementRef, Input,  OnInit, ViewChild } from '@angular/core';
import { ResizeObserver } from '@juggle/resize-observer';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewInit {
  @Input() front!: string;
  @Input() back!: string;
  @ViewChild('font') public font!: ElementRef;
  a:number = 0
  ngAfterViewInit(){
    this.elementObserver()
  }
  // get font size basid on available width and set font size 
  elementObserver() {
    var ro = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const { inlineSize: width} = entry.contentBoxSize[0];
        if (this.getFontSize(this.back,width) > 15){
          this.font.nativeElement.style.cssText = "font-size: " + this.getFontSize(this.back,width) + "px";  
        }
      });
    });
    ro.observe(this.font.nativeElement); 
  }
  getFontSize(text:string , width:number) {
    let fontSize = 10;
    let textWidth = 0;
    do {
      fontSize++;
      textWidth = this.measureTextWidth(text, fontSize);
    } while (textWidth < width && fontSize < 40);
    return fontSize - 2;
  }
  measureTextWidth(text:string, fontSize:number) {
    // Some code to measure the text width with given font size.
    let span = document.createElement("span");
    // Add the text and font size to the span
    span.innerHTML = text;
    span.style.cssText = "font-size: " + fontSize + "px";
    span.style.visibility = 'hidden'
    // Append it to the body
    document.body.appendChild(span);
    // Measure the width of the span
    let width = span.offsetWidth;
    // Remove it from the body
    document.body.removeChild(span);
    return width;
  }
}
