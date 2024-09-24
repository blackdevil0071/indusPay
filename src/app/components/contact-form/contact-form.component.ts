import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';  // Service to handle HTTP requests
import { ContactFormData, ContactFormDataService } from '../../services/contact-form-data.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],  // Include necessary modules
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm: FormGroup;
  successMessage: string = ''; // Property to hold success message
  @Input() data: ContactFormData | null = null; // Input property to receive data

  constructor(private fb: FormBuilder, private dataService: DataService, private formDataService: ContactFormDataService) {
    // Define form controls and validators
    this.contactForm = this.fb.group({
      createdAt: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(1)]],
      gender: ['', Validators.required],
      mobilenumber: ['', [Validators.required, Validators.minLength(10)]],
      pan_no: ['', Validators.required],
      adhaar_no: ['', [Validators.required, Validators.minLength(12)]],
      status: [true]
    });
  }

 ngOnInit() {
    if (this.data) {
      this.contactForm.patchValue(this.data); // Prefill the form with the received data
    }
  }

  onSubmit() {
    console.log('Form Valid:', this.contactForm.valid);  // Debugging line
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.formDataService.addFormData(formData);
      console.log('Form Data:', formData);  // Print form data

      this.dataService.postData(formData).subscribe(
        (response) => {
          console.log('Data submitted successfully:', response);
          this.successMessage = 'Data submitted successfully!'; // Set success message
          this.contactForm.reset(); // Reset the form after successful submission

          // Optionally close the modal here
        },
        (error) => {
          console.error('Error submitting data:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  // Function to handle form update (for PUT method)
  onUpdate() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      this.dataService.putData(formData).subscribe(
        (response) => {
          console.log('Data updated successfully:', response);
          this.successMessage = 'Data updated successfully!'; // Set success message for updates
          // Optionally close the modal or reset the form here
        },
        (error) => {
          console.error('Error updating data:', error);
        }
      );
    }
  }
}
