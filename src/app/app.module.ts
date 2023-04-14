import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './_shared/sidebar/sidebar.component';
import { MeComponent } from './me/me.component';
import { SvgIconComponent } from './_shared/svg-icon/svg-icon.component';
import { SkillsComponent } from './_shared/skills/skills.component';
import { AboutMeComponent } from './_shared/about-me/about-me.component';
import { SummaryComponent } from './_shared/summary/summary.component';
import { ProjectCardComponent } from './_shared/project-card/project-card.component';
import { HeaderComponent } from './_shared/header/header.component';
import { SkillsCardComponent } from './_shared/skills-card/skills-card.component';
import { ContactMeComponent } from './_shared/contact-me/contact-me.component';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './_shared/project/project.component'; // <-- import FormsModule
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxSlickCarouselComponent } from './_shared/ngx-slick-carousel/ngx-slick-carousel.component';
import { MetaService } from './service/meta-tag.service';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MeComponent,
    SvgIconComponent,
    SkillsComponent,
    AboutMeComponent,
    SummaryComponent,
    ProjectCardComponent,
    HeaderComponent,
    SkillsCardComponent,
    ContactMeComponent,
    ProjectComponent,
    NgxSlickCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [MetaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
