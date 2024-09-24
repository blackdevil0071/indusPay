import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-our-story',
  standalone: true,
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.css']
})
export class OurStoryComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Only access the DOM if we are in the browser
      const images = document.querySelectorAll('.story-image, .decorative-image, .small-image');
      const storyDescription = document.querySelector('.story-description'); // Select the story description
      const infoText = document.querySelector('.info-text'); // Select the info text
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7 // Trigger when 10% of the element is visible
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      }, options);

      images.forEach(image => {
        observer.observe(image);
      });

      // Observe the story description and info text for visibility
      if (storyDescription) {
        observer.observe(storyDescription);
      }

      if (infoText) {
        observer.observe(infoText);
      }
    }
  }

}
