import { Component } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent {
  notes: string[] = ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'];
}
