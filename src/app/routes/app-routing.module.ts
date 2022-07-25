import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent } from '../components/note/note.component';
import { NoNoteComponent } from '../components/no-note/no-note.component';

const routes: Routes = [
  {path: "", component: NoNoteComponent},
  {path: "note/:id", component: NoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }