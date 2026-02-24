import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  form;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.nonNullable.group({
      username: '',
      password: ''
    });
  }

  submit() {

    const { username, password } = this.form.getRawValue();

    this.auth.register(username, password)
      .subscribe({
        next: () => this.router.navigate(['/login']),
        error: err => console.error(err)
      });

  }

}

