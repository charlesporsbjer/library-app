import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Quote {
  id: number;
  text: string;
  author: string;
}

@Injectable({ providedIn: 'root' })
export class QuoteService {

  private api = 'http://localhost:5158/api/quotes';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.api);
  }

  create(text: string, author: string): Observable<Quote> {
    return this.http.post<Quote>(this.api, { text, author });
  }

  update(id: number, text: string, author: string): Observable<void> {
    return this.http.put<void>(`${this.api}/${id}`, { text, author });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}

