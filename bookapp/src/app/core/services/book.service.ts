import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrowserHttpService } from './browser-http.service';

export interface Book {
  id: number;
  title: string;
  author: string;
  publishDate: string;
}

@Injectable({ providedIn: 'root' })
export class BookService {

  private api = 'https://library-app-5m14.onrender.com/api/bookscontrollerasync';

  constructor(private http: BrowserHttpService) {}

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.api);
  }

  getById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.api}/${id}`);
  }

  create(book: any): Observable<Book> {
    return this.http.post<Book>(this.api, book);
  }

  update(id: number, book: any): Observable<void> {
    return this.http.put<void>(`${this.api}/${id}`, book);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
