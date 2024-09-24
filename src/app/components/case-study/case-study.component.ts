import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, Inject, PLATFORM_ID, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.css']
})
export class CaseStudyComponent implements AfterViewInit {
  caseStudies = [
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/12d7e472e829ab015bfda35aa0b481f68b4f549f6d9272ae7ec4958e30395fbd?placeholderIfAbsent=true&apiKey=4548a24a53294249b2f33dd371f436bb',
      category: 'Graphic Design',
      title: 'Aura Branding Design'
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bd6d12d5107b87e8bf9f76eb9d6904081417f8fefbe26b520e0ff86fc5316dff?placeholderIfAbsent=true&apiKey=4548a24a53294249b2f33dd371f436bb',
      category: 'Graphic Design',
      title: 'AB.S Snack Packaging'
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/06f57006a8e67defae0ed399e0206e45c6724ad56e9f839f5715d585bbf3f1be?placeholderIfAbsent=true&apiKey=4548a24a53294249b2f33dd371f436bb',
      category: 'Web Development',
      title: 'Gradient Website Development'
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c1b275469a0f9b810d50a71ec0b8fa43adf41974757ef8c19fbc06403f24275b?placeholderIfAbsent=true&apiKey=4548a24a53294249b2f33dd371f436bb',
      category: 'Content Writing',
      title: 'Magazine Content Writing'
    }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private renderer: Renderer2,
    private elRef: ElementRef
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const images = this.elRef.nativeElement.querySelectorAll('.case-study-image, .decorative-image');
      const sectionDescription = this.elRef.nativeElement.querySelector('.section-description');

      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% o
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'visible');  // Add 'visible' class to images
          } else {
            this.renderer.removeClass(entry.target, 'visible');  // Remove 'visible' class from images
          }
        });
      }, options);

      images.forEach((image: Element) => observer.observe(image));

      // Observer for the section description
      if (sectionDescription) {
        observer.observe(sectionDescription);
        const descObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.renderer.addClass(entry.target, 'visible'); // Add 'visible' class to section description
            }
          });
        }, options);

        descObserver.observe(sectionDescription);
      }
    }
  }
}
