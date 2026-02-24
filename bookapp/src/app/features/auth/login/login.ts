import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

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

    this.auth.login(username, password)
      .subscribe({
        next: () => this.router.navigate(['/books']),
        error: (err: any) => console.error(err)
      });

  }

}

