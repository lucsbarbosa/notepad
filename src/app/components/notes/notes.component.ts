import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass'],
})
export class NotesComponent implements OnInit {
  notes!: note[];
  selectedId !: number;

  constructor(private dataService: DataService, private uiService: UiService) {}

  ngOnInit(): void {
    this.dataService.getNotes().subscribe((notes) => {
      this.notes = notes;
    });
    this.uiService.currentId.subscribe(currentId => {
      this.selectedId = currentId!;
    })
  }
}
