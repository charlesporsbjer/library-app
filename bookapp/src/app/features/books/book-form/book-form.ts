import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BookService } from '../../../core/services/book.service';

@Component({
  selector: 'app-book-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css',
})
export class BookForm implements OnInit {

  form;
  id: number | null = null;

  constructor(
    private fb: FormBuilder,
    private service: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.form = this.fb.group({
      title: [''],
      author: [''],
      publishDate: ['']
    });
  }

  ngOnInit() {

    const param = this.route.snapshot.paramMap.get('id');

    if (param) {
      this.id = Number(param);

      this.service.getById(this.id)
        .subscribe(book => this.form.patchValue(book));
    }
  }

  submit() {

    if (this.id)
      this.service.update(this.id, this.form.value)
        .subscribe(() =>
          this.router.navigate(['/books'])
        );

    else
      this.service.create(this.form.value)
        .subscribe(() =>
          this.router.navigate(['/books'])
        );
  }
}
