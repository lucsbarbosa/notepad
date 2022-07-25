import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass'],
})
export class NoteComponent implements OnInit {
  note!: note;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((id) => {
      const noteId = Number(id['id']);
      this.uiService.idChanged(noteId);
      this.dataService.getNotes().subscribe((data) => {
        this.note = data.filter((note) => {
          return note.id == noteId;
        })[0];
      });
    });
  }
}
