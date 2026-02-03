import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ContactRequest } from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactRequest: ContactRequest = {
    name: '',
    email: '',
    message: ''
  };

  sending = false;
  success = false;
  error: string | null = null;

  constructor(private contactService: ContactService) {}

  onSubmit(): void {
    this.sending = true;
    this.success = false;
    this.error = null;

    this.contactService.sendMessage(this.contactRequest).subscribe({
      next: () => {
        this.success = true;
        this.sending = false;
        this.resetForm();
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          this.success = false;
        }, 5000);
      },
      error: (err) => {
        this.error = 'Failed to send message. Please try again.';
        this.sending = false;
        console.error('Error sending message:', err);
      }
    });
  }

  resetForm(): void {
    this.contactRequest = {
      name: '',
      email: '',
      message: ''
    };
  }
}