import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf
  ]
})
export default class AuthComponent {

  private readonly router: Router = inject(Router);

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  login() {
    if (this.loginForm.valid) {
      const formValue = <{ username: string, password: string }>Object.assign({}, this.loginForm.value);
      if (formValue.username === "admin" && formValue.password === "616161") {
        this.router.navigateByUrl('panel');
      }
    } else {
      alert('in valid form')
    }
  }

  get usernameIsError(): boolean | undefined {
    return this.loginForm.get('username')?.hasError('required');
  }

  get passwordIsError(): boolean | undefined {
    return this.loginForm.get('password')?.hasError('required');
  }


}