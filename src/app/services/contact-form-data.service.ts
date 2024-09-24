import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface ContactFormData {
  id: number;  // Ensure that 'id' is included
  createdAt: string;
  first_name: string;
  last_name: string;
  emailId: string;
  age: number;
  gender: string;
  mobilenumber: number;  // Use appropriate type for your use case
  pan_no: string;
  adhaar_no: string;
  status: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ContactFormDataService {
  private formDataSubject = new BehaviorSubject<ContactFormData[]>([]);
  currentData = this.formDataSubject.asObservable();

  addFormData(formData: ContactFormData) {
    // Get current data and add the new form data
    const currentData = this.formDataSubject.value;
    this.formDataSubject.next([...currentData, formData]);
  }
}
