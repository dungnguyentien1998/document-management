// import { exhaustMap, take } from 'rxjs/operators';
// import { getToken } from './../../store/auth/auth.selector';
// import { AppState } from './../../store/app.state';
// import { Store } from '@ngrx/store';
// import { Injectable } from '@angular/core';
// import {
//   HttpErrorResponse,
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
//   HttpResponse
// } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import {catchError, map} from 'rxjs/operators';
// import {Router} from '@angular/router';

// @Injectable()
// export class AuthTokenInterceptor implements HttpInterceptor {
//   constructor(private router: Router) {}
//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     // return this.store.select(getToken).pipe(
//     //   take(1),
//     //   exhaustMap((token) => {
//     //     if (!token) {
//     //       return next.handle(req);
//     //     }
//     //     let modifiedReq = req.clone({
//     //       params: req.params.append('auth', token),
//     //     });
//     //     return next.handle(modifiedReq);
//     //   })
//     // );
//     const accessToken = localStorage.getItem('accessToken');

//     req = req.clone({
//       headers: req.headers.set('Authorization', `Bearer ${accessToken}`),
//     });

//     if (!req.headers.has('Content-Type')) {
//       req = req.clone({headers: req.headers.set('Content-Type', 'application/json')});
//     }

//     req = req.clone({headers: req.headers.set('Accept', 'application/json')});

//     return next.handle(req).pipe(
//       map((event: HttpEvent<any>) => {
//         if (event instanceof HttpResponse) {
//           // console.log('event--->>>', event);
//         }
//         return event;
//       }),
//       catchError((error: HttpErrorResponse) => {
//         if (error.status === 401) {
//           this.router.navigateByUrl('/auth/login').then();
//         }
//         return throwError(error);
//       }));

//   }
// }
