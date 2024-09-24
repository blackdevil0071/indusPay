import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-statistics',
  standalone: true,
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const statsContainer = document.querySelector('.stats-container');
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the container is visible
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            statsContainer?.classList.add('visible'); // Add visible class to trigger animation
          } else {
            statsContainer?.classList.remove('visible'); // Optionally remove class when out of view
          }
        });
      }, options);

      if (statsContainer) {
        observer.observe(statsContainer);
      }
    }
  }
}
