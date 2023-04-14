import { Component, Input, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit  {
  @Input() pageTitle!: string;
  @Input() pageDescription!: string;
constructor(private metaService: Meta) { }

  ngOnInit(): void {
    // Update the title tag
    this.metaService.updateTag({ name: 'title', content: 'Abdelrahman Mahmoud - Full Stack Developer' });
    // Update the description tag
    this.metaService.updateTag({ name: 'description', content: "Abdelrahman Mahmoud: Full-stack developer specializing in JavaScript, Angular, Node.js, and PostgreSQL. Offers web dev services: front-end, back-end, and DB design. Contact for projects." });
    // Update the keywords tag
    this.metaService.updateTag({ name: 'keywords', content: 'Angular, Node.js, MongoDB, Full Stack Developer' });
    // Update the og:title tag for social media sharing
    this.metaService.updateTag({ property: 'og:title', content: 'Abdelrahman Mahmoud - Full Stack Developer' });
    // Update the og:description tag for social media sharing
    this.metaService.updateTag({ property: 'og:description', content: 'I am a full-stack developer with experience in building web applications using Angular, Node.js and PostgreSQL.' });
  }
}
