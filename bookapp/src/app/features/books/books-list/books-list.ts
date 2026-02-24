import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookService, Book } from '../../../core/services/book.service';

@Component({
  selector: 'app-books-list',
  imports: [RouterLink],
  templateUrl: './books-list.html',
  styleUrl: './books-list.css',
})
export class BooksList implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getAll()
      .subscribe(data => this.books = data);
  }

  delete(id: number) {

    if (!confirm('Delete book?'))
      return;

    this.bookService.delete(id)
      .subscribe(() => this.loadBooks());
  }
}
