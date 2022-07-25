import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url: string = 'http://localhost:3000/notes';

  constructor(private http: HttpClient) { }

  getNotes(): Observable<note[]> {
    return this.http.get<note[]>(this.url);
  }
}
