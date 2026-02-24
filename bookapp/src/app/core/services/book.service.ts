import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  author: string;
  publishDate: string;
}

@Injectable({ providedIn: 'root' })
export class BookService {

  private api = 'http://localhost:5158/api/bookscontrollerasync';

  constructor(private http: HttpClient) {}

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
