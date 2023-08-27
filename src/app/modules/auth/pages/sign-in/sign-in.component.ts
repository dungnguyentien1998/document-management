import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as userActions from '../../../../app-state/actions';
import * as fromRoot from '../../../../app-state';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
// import { AppState } from 'src/app/store/app.state';
// import { loginStart } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;

  constructor(private readonly _formBuilder: FormBuilder, private router: Router, private readonly store: Store) {
    this.store.select(fromRoot.userLogin).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      console.log('data::::', data);
      if (data.isLoadingSuccess && data.result.accessToken) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  model: User = new User();
  destroy$: Subject<boolean> = new Subject<boolean>();

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
    const { email, password } = this.form.value;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    console.log(this.model)
    this.store.dispatch(userActions.login({user: { email: email, password: password }}));
  }

  ngOnDestroy(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

export class User {

  constructor(

  ) {  }

  public email!: string;
  public password!: string;

}
