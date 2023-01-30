import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent {
  @Input() header!: string;
  @Input() content!: Content[];
}
export interface Content  {
  front:string,
  back: string,
}