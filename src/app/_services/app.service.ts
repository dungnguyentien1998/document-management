import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private userLoggedIn = new Subject<boolean>();
  loginUrl = 'http://localhost:3000/api/v1/auth/signin';
  signupUrl = '/api/signup';

  constructor(private http: HttpClient) {
    this.userLoggedIn.next(false);
  }

  setUserLoggedIn(userLoggedIn: boolean) {
    this.userLoggedIn.next(userLoggedIn);
  }

  getUserLoggedIn(): Observable<boolean> {
    return this.userLoggedIn.asObservable();
  }

  login(user: any) {
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    console.log("user: ", typeof user, " ", user);

    const options = {headers};
    return this.http.post(this.loginUrl,  {"email" : user.email, "password": user.password}, options).pipe(
      map((response: Object) => response),
      catchError(err => {
        console.log(err);
        return of([]);
      })
  );
  }

  signup(user: any) {
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    const options = {headers};
    return this.http.post(this.signupUrl,  {user}, options).pipe(
      map((response: Object) => response),
      catchError(err => {
        console.log(err);
        return of([]);
      })
   );
  }
}
