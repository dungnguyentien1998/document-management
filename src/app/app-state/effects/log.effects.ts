import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { LogService } from '../../_services';
import * as logActions from '../actions';
import {saveAs} from 'file-saver';

@Injectable()
export class LogEffects {

  constructor(
    private actions$: Actions,
    private logService: LogService
  ) {}

  getLogs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logActions.getLogs),
      exhaustMap(action =>
        this.logService.getLogs().pipe(
          map(response => {
            console.log("response:::", response)
            return logActions.getLogsSuccess({response})
          }),
          catchError((error: any) => of(logActions.getLogsFailure(error))))
      )
    )
  );

  createLog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logActions.createLog),
      exhaustMap(action =>
        this.logService.addLog(action.log).pipe(
          map(response => {
            console.log("Start");
            let blob:any = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })
            const url = window.URL.createObjectURL(blob);
            saveAs(blob, 'file.docx')
            console.log("End");

            return logActions.createLogSuccess(response)
          }),
          catchError((error: any) => {
            console.log("Error: ", error);
            return of(logActions.createLogFailure(error))
          }))
      )
    )
  );


  deleteLog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logActions.deleteLog),
      exhaustMap(action => this.logService.deleteLog(action.logid).pipe(
          map(response => logActions.deleteLogSuccess(response)),
          catchError((error: any) => of(logActions.deleteLogFailure(error))))
      )
    )
  );

  editLog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logActions.editLog),
      exhaustMap(action =>
        this.logService.editLog(action.log).pipe(
          map(response => logActions.editLogSuccess(response)),
          catchError((error: any) => of(logActions.editLogFailure(error))))
      )
    )
  );

}
