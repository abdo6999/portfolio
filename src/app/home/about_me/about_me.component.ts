import { Component } from '@angular/core';

@Component({
  selector: 'app-about_me',
  templateUrl: './about_me.component.html',
  styleUrls: ['./about_me.component.scss']
})
export class SkillsComponent {
  contant = [
    {front:'age',back:'21'},
    {front:'Email',back:'abdelrahman.mahmoud.elsaeed@gmail.com'},
    {front:'Address',back:'Egypt, Cairo, Mansoura'},
    {front:'phone',back:'01095160726'},
    {front:'Language',back:'Arabic, English'},
    {front:'freelance',back:'Available'}
  ]
}
