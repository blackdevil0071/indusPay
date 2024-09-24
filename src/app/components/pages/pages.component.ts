import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ContactFormData } from '../../services/contact-form-data.service';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  formDataList: ContactFormData[] = [];
  selectedData: ContactFormData | null = null; // Store selected data for editing

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.dataService.getData().subscribe(
      (data: ContactFormData[]) => {
        this.formDataList = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  openUpdateForm(data: ContactFormData) {
    this.selectedData = data; // Store the selected data
    console.log('Updating data:', data);
  }

  deleteData(id: number) {
    this.dataService.deleteData(id).subscribe(
      () => {
        console.log('Data deleted successfully');
        this.fetchData();
      },
      (error) => {
        console.error('Error deleting data:', error);
      }
    );
  }
}
