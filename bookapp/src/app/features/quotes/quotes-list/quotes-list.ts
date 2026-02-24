import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuoteService, Quote } from '../../../core/services/quote.service'

@Component({
  selector: 'app-quotes-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './quotes-list.html',
  styleUrl: './quotes-list.css',
})
export class QuotesList implements OnInit {
  quotes: Quote[] = [];
  newQuote = '';
  newAuthor = '';
  editingId: number | null = null;
  editText = '';
  editAuthor = '';

  constructor(private service: QuoteService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getAll().subscribe(data => {
      // limit to 5 in UI
      this.quotes = data.slice(0, 5);
    });
  }

  add() {
    if (!this.newQuote.trim() || this.quotes.length >= 5)
      return;

    this.service.create(this.newQuote, this.newAuthor).subscribe(() => {
      this.newQuote = '';
      this.newAuthor = '';
      this.load();
    });
  }

  edit(quote: Quote) {
    this.editingId = quote.id;
    this.editText = quote.text;
    this.editAuthor = quote.author || '';
  }

  save(id: number) {
    this.service.update(id, this.editText, this.editAuthor).subscribe(() => {
      this.editingId = null;
      this.editText = '';
      this.editAuthor = '';
      this.load();
    });
  }

  cancel() {
    this.editingId = null;
    this.editText = '';
    this.editAuthor = '';
  }

  delete(id: number) {
    if (!confirm('Delete quote?'))
      return;

    this.service.delete(id).subscribe(() => this.load());
  }
}
