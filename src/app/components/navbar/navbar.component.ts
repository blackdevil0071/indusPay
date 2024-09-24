import { Component } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ContactFormComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isContactFormOpen = false;

  // Toggle the form visibility
  toggleContactForm() {
    this.isContactFormOpen = !this.isContactFormOpen;
  }
}
