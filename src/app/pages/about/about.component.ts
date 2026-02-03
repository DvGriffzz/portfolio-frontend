import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  downloading = false;

  constructor() {}

  downloadCv(): void {
    window.open(`${environment.apiUrl}public/cv`, '_blank');
  }
}