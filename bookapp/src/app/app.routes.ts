import { Routes } from '@angular/router';

import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { BooksList } from './features/books/books-list/books-list';
import { BookForm } from './features/books/book-form/book-form';
import { QuotesList } from './features/quotes/quotes-list/quotes-list';

import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },
  { path: 'register', component: Register },

  { path: 'books', component: BooksList, canActivate: [authGuard] },
  { path: 'books/new', component: BookForm, canActivate: [authGuard] },
  { path: 'books/edit/:id', component: BookForm, canActivate: [authGuard] },

  { path: 'quotes', component: QuotesList, canActivate: [authGuard] },

  { path: '**', redirectTo: 'login' }
];

