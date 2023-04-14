import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import info from 'src/assets/info';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MetaService } from 'src/app/service/meta-tag.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  links = info.links;

  // Array of section names in the app
  sections: string[] = [
    'summary',
    'about-me',
    'skills',
    'projects',
    'contact-me',
  ];

  // Array of HTMLElements representing the sidebar buttons
  nativeElements!: Array<HTMLElement>;

  // Query list of sidebar button elements
  @ViewChildren('sidebarButton') sidebarButtons!: QueryList<ElementRef>;

  // Safe resource URL for the user's CV
  safeUrl!: SafeResourceUrl;

  // Boolean to show/hide iframe
  showIframe = false;
  // Constructor function that injects the DomSanitizer service
  constructor(private sanitizer: DomSanitizer,private Meta :MetaService) {}

  // After the view is initialized, store the native elements for the sidebar buttons
  ngAfterViewInit() {
    const sidebarButtonArray = this.sidebarButtons.toArray();
    this.nativeElements = sidebarButtonArray.map((el) => el.nativeElement);
  }


  // After the component is initialized, set the safeUrl for the user's CV and create an IntersectionObserver to track section visibility
  ngOnInit(): void {
    // Set the safeUrl for the user's CV
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.links.cv);

    // Set up media query for mobile devices
    const mobileQuery = window.matchMedia('(max-width: 600px)');

    // Create IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        // Iterate over each entry in the observer
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update meta tags
            const section = entry.target.id;
            this.Meta.sectionUpdateMetaTags(section);
            // Remove "selected" class from all nativeElements
            this.nativeElements.map((el) => {
              el.classList.remove('selected');
            });
            // Add "selected" class to the nativeElement corresponding to the current section
            const element = document.querySelector(
              `[href="${'#' + entry.target.id}"]`
            );
            element?.classList.add('selected');
          }
        });
      },
      { threshold: mobileQuery.matches ? 0.01 : 0.5 }
    );

    // For each section in the sections array, add an observer to track its visibility
    this.sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });
  }

  // Function to show the iframe
  openIframe() {
    this.showIframe = true;
  }

  // Function to close the iframe
  closeIframe() {
    this.showIframe = false;
  }
}
