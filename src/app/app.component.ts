import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  pageTitle: string = 'Abdelrahman Mahmoud - Full Stack Developer';
  pageDescription: string = 'Abdelrahman Mahmoud is a Full Stack Developer with experience in Angular, JavaScript, Node.js, and more. Learn more about his skills and experience here.';
  constructor(private meta: Meta){}
  ngOnInit() {
    // Update the page title
    this.meta.updateTag({ name: 'title', content: this.pageTitle });

    // Update the page description
    this.meta.updateTag({ name: 'description', content: this.pageDescription });
  }
}
