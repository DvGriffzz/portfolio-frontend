import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactRequest } from '../models/contact.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}public/contact`;

  constructor(private http: HttpClient) { }

  sendMessage(message: ContactRequest): Observable<void> {
    return this.http.post<void>(this.apiUrl, message);
  }
}