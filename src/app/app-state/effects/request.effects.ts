import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { RequestService } from '../../_services';
import * as requestActions from '../actions';
import {saveAs} from 'file-saver';

@Injectable()
export class RequestEffects {

  constructor(
    private actions$: Actions,
    private requestService: RequestService
  ) {}

  getRequests$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestActions.getRequests),
      exhaustMap(action =>
        this.requestService.getRequests().pipe(
          map(response => {
            console.log("response:::", response)
            return requestActions.getRequestsSuccess({response})
          }),
          catchError((error: any) => of(requestActions.getRequestsFailure(error))))
      )
    )
  );

  createRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestActions.createRequest),
      exhaustMap(action =>
        this.requestService.addRequest(action.request).pipe(
          map(response => {
            console.log("Start");
            let blob:any = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })
            const url = window.URL.createObjectURL(blob);
            saveAs(blob, 'file.docx')
            console.log("End");

            return requestActions.createRequestSuccess(response)
          }),
          catchError((error: any) => {
            console.log("Error: ", error);
            return of(requestActions.createRequestFailure(error))
          }))
      )
    )
  );


  deleteRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestActions.deleteRequest),
      exhaustMap(action => this.requestService.deleteRequest(action.requestid).pipe(
          map(response => requestActions.deleteRequestSuccess(response)),
          catchError((error: any) => of(requestActions.deleteRequestFailure(error))))
      )
    )
  );

  editRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestActions.editRequest),
      exhaustMap(action =>
        this.requestService.editRequest(action.request).pipe(
          map(response => requestActions.editRequestSuccess(response)),
          catchError((error: any) => of(requestActions.editRequestFailure(error))))
      )
    )
  );

}
