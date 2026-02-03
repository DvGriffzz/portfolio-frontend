import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private apiUrl = `${environment.apiUrl}public/skills`;

  constructor(private http: HttpClient) { }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.apiUrl);
  }
}