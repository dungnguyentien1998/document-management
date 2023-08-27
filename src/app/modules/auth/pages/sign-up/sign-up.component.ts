import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
// import { AppState } from 'src/app/store/app.state';
// import { signupStart } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;

  constructor(private readonly _formBuilder: FormBuilder, private readonly _router: Router) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    console.log("========")
    this.submitted = true;
    const { email, password, fullname, phone } = this.form.value;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    // this.store.dispatch(signupStart({ fullname, email, password, phone }));

    // this._router.navigate(['/']);
  }
}
