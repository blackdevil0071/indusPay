import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { ServiceSectionComponent } from "./components/service-section/service-section.component";
import { TestimonialComponentComponent } from "./components/testimonial-component/testimonial-component.component";
import { OurStoryComponent } from "./components/our-story/our-story.component";
import { StatisticsComponent } from "./components/statistics/statistics.component";
import { TestimonialComponent2Component } from "./components/testimonial-component2/testimonial-component2.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FeaturedComponent } from "./components/featured/featured.component";
import { CaseStudyComponent } from "./components/case-study/case-study.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { PagesComponent } from "./components/pages/pages.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroSectionComponent, ServiceSectionComponent, TestimonialComponentComponent, OurStoryComponent, StatisticsComponent, TestimonialComponent2Component, FooterComponent, FeaturedComponent, CaseStudyComponent, ContactFormComponent, PagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'indussPayProject';
}
