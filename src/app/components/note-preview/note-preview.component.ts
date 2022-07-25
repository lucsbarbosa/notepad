import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-preview',
  templateUrl: './note-preview.component.html',
  styleUrls: ['./note-preview.component.sass']
})
export class NotePreviewComponent implements OnInit {
  @Input() info!: note;
  @Input() selectedId!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
