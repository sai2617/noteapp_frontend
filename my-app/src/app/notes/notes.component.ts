import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  notes: string[] = [];
  newNote: string = '';

  constructor(private router: Router) {}
  addNotes() {
    // Perform login logic here
    // This code represents a basic login process; modify it as per your actual implementation
    const loginSuccessful = true; // Set this flag based on the login result

    if (loginSuccessful) {
      this.router.navigate(['/notes-list']);
    }
  }

  addNote() {
    if (this.newNote.trim() !== '') {
      this.notes.push(this.newNote);
      this.newNote = '';
      this.router.navigate(['/notes-list']);
    }
  }
}
