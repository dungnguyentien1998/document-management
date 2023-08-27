// import { User } from './../models/user.model';
// import { Observable } from 'rxjs';

// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// import { Store } from '@ngrx/store';
// import { AuthResponseData } from '../models/auth-response.model';
// import { AppState } from 'src/app/store/app.state';
// import { autoLogout } from 'src/app/store/auth/auth.actions';


// const AUTH_API = 'http://localhost:3000/api/v1/auth/';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   timeoutInterval: any;
//   constructor(private http: HttpClient, private store: Store<AppState>) {}

//   login(email: string, password: string): Observable<AuthResponseData> {
//     return this.http.post<AuthResponseData>(
//       AUTH_API + 'signin', { email, password }, httpOptions
//     );
//   }

//   signUp(fullname: string, email: string, password: string, phone: string): Observable<AuthResponseData> {
//     return this.http.post<AuthResponseData>(
//       AUTH_API + 'signup', { fullname, email, password, phone }, httpOptions
//     );
//   }

//   formatUser(data: AuthResponseData) {
//     const expirationDate = new Date(
//       new Date().getTime() + +data.expiresIn * 1000
//     );
//     const user = new User(
//       data.email,
//       data.accessToken,
//       expirationDate
//     );
//     localStorage.setItem('accessToken',data.accessToken);
//     return user;
//   }

//   getErrorMessage(message: string) {
//     switch (message) {
//       case 'EMAIL_NOT_FOUND':
//         return 'Email Not Found';
//       case 'INVALID_PASSWORD':
//         return 'Invalid Password';
//       case 'EMAIL_EXISTS':
//         return 'Email already exists';
//       default:
//         return 'Unknown error occurred. Please try again';
//     }
//   }

//   setUserInLocalStorage(user: User) {
//     localStorage.setItem('userData', JSON.stringify(user));

//     this.runTimeoutInterval(user);
//   }

//   runTimeoutInterval(user: User) {
//     const todaysDate = new Date().getTime();
//     const expirationDate = user.expireDate.getTime();
//     const timeInterval = expirationDate - todaysDate;

//     this.timeoutInterval = setTimeout(() => {
//       this.store.dispatch(autoLogout());
//       //logout functionality or get the refresh token
//     }, timeInterval);
//   }

//   getUserFromLocalStorage() {
//     const userDataString = localStorage.getItem('userData');
//     if (userDataString) {
//       const userData = JSON.parse(userDataString);
//       const expirationDate = new Date(userData.expirationDate);
//       const user = new User(
//         userData.email,
//         userData.token,
//         expirationDate
//       );
//       this.runTimeoutInterval(user);
//       return user;
//     }
//     return null;
//   }

//   logout() {
//     localStorage.removeItem('userData');
//     if (this.timeoutInterval) {
//       clearTimeout(this.timeoutInterval);
//       this.timeoutInterval = null;
//     }
//   }
// }
