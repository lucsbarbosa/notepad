import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  id = new BehaviorSubject<number | null>(null);
  currentId = this.id.asObservable();

  idChanged(id: number): void {
    this.id.next(id)
  }

  constructor() { }
}
