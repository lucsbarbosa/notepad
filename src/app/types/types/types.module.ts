import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

declare global {
  interface note {
    id: number,
    title: string;
    text: string;
    date: string;
  }
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TypesModule { }
