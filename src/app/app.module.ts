import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MeComponent } from './pages/me/me.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { ProjectComponent } from './pages/project/project.component';
import { SvgIconComponent } from './_shared/svg-icon/svg-icon.component';
import { SkillsComponent } from './_shared/skills/skills.component';
import { AboutMeComponent } from './_shared/about-me/about-me.component';
import { SummaryComponent } from './_shared/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MeComponent,
    ContactMeComponent,
    ProjectComponent,
    SvgIconComponent,
    SkillsComponent,
    AboutMeComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
