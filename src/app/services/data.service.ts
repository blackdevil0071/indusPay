import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(`https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile`);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile`, data);
  }

  putData(data: any): Observable<any> {
    const url = `${`https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile`}/${data.id}`;
    return this.http.put(url, data);
  }

  // Method to delete data by ID
  deleteData(id: number): Observable<any> {
    const url = `${`https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile`}/${id}`;
    return this.http.delete(url);
  }
}
