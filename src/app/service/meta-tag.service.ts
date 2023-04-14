import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

// Define a type for the section functions
type SectionFunctions = Record<string, () => Tag>;

@Injectable({
  providedIn: 'root',
})
export class MetaService {

  // Inject the Meta service into the constructor
  constructor(private meta: Meta) {}

  // This method updates the meta tags based on the given section
  sectionUpdateMetaTags(section: string): void|null {

    // Define an object that maps each section to its corresponding function that returns a Tag object
    const sectionFunctions : SectionFunctions = {
      'about-me': this.aboutMe,
      'skills': this.skills,
      'projects': this.projects,
      'contact-me': this.contact,
    };

    // If the given section is not in the sectionFunctions object, return null
    if (!sectionFunctions[section]) {
      return null;
    }

    // Call the function corresponding to the given section to get the Tag object
    const tags: Tag = sectionFunctions[section]();

    // Update the title tag
    this.meta.updateTag({ name: 'title', content: tags.title });

    // Update the description tag
    this.meta.updateTag({ name: 'description', content: tags.description });

    // Update the keywords tag
    this.meta.updateTag({ name: 'keywords', content: tags.keywords });

    // Update the og:title tag
    this.meta.updateTag({ property: 'og:title', content: tags.ogTitle });

    // Update the og:description tag
    this.meta.updateTag({ property: 'og:description', content: tags.ogDescription });
  }

  // These are the section functions that return Tag objects
  aboutMe(): Tag {
    return {
      title: 'About Me | Abdelrahman Mahmoud',
      description: 'Learn more about Abdelrahman Mahmoud, a software engineer and web developer.',
      keywords: 'Abdelrahman Mahmoud, software engineer, web developer, personal website',
      ogTitle: 'About Abdelrahman Mahmoud',
      ogDescription: 'Learn more about Abdelrahman Mahmoud, a software engineer and web developer.',
    };
  }

  skills(): Tag {
    return {
      title: 'Skills | Abdelrahman Mahmoud',
      description: 'Check out Abdelrahman Mahmoud\'s skills in web development and software engineering.',
      keywords: 'Abdelrahman Mahmoud, skills, web development, software engineering, front-end, back-end',
      ogTitle: 'Skills | Abdelrahman Mahmoud',
      ogDescription: 'Check out Abdelrahman Mahmoud\'s skills in web development and software engineering.',
    };
  }

  projects(): Tag {
    return {
      title: 'My Projects | Abdelrahman Mahmoud',
      description: 'Explore my portfolio of web development projects, including front-end, back-end, and full-stack applications.',
      keywords: 'projects, web development, portfolio, front-end, back-end, full-stack',
      ogTitle: 'My Projects | Abdelrahman Mahmoud',
      ogDescription: 'Explore my portfolio of web development projects, including front-end, back-end, and full-stack applications.',
    };
  }

  contact(): Tag {
    return {
      title: 'Contact Me | Abdelrahman Mahmoud ',
      description: 'Contact Abdelrahman Mahmoud, a software engineer and web developer.',
      keywords: 'contact, Abdelrahman Mahmoud, software engineer, web developer',
      ogTitle: 'Contact Abdelrahman Mahmoud',
      ogDescription: 'Contact Abdelrahman Mahmoud, a software engineer and web developer.',
    };
  }
}


  interface Tag {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
  }
