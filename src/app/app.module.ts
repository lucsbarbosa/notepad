import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { TypesModule } from './types/types/types.module';
import { AppRoutingModule } from './routes/app-routing.module';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotesComponent } from './components/notes/notes.component';
import { NoteComponent } from './components/note/note.component';
import { NotePreviewComponent } from './components/note-preview/note-preview.component';
import { NoNoteComponent } from './components/no-note/no-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteComponent,
    NotePreviewComponent,
    NoNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    TypesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
