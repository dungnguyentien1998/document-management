import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { TodoService } from '../../_services';
import * as todoActions from '../actions';
import {saveAs} from 'file-saver';

@Injectable()
export class TodoEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}

  getReports$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.getReports),
      exhaustMap(action =>
        this.todoService.getReports().pipe(
          map(response => {
            console.log("response:::", response)
            return todoActions.getReportsSuccess({response})
          }),
          catchError((error: any) => of(todoActions.getReportsFailure(error))))
      )
    )
  );

  createReport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.createReport),
      exhaustMap(action =>
        this.todoService.addReport(action.report).pipe(
          map(response => {
            console.log("Start");
            let blob:any = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })
            const url = window.URL.createObjectURL(blob);
            saveAs(blob, 'file.docx')
            console.log("End");

            return todoActions.createReportSuccess(response)
          }),
          catchError((error: any) => {
            console.log("Error: ", error);
            return of(todoActions.createReportFailure(error))
          }))
      )
    )
  );


  deleteReport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.deleteReport),
      exhaustMap(action => this.todoService.deleteReport(action.reportid).pipe(
          map(response => todoActions.deleteReportSuccess(response)),
          catchError((error: any) => of(todoActions.deleteReportFailure(error))))
      )
    )
  );

  editReport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.editReport),
      exhaustMap(action =>
        this.todoService.editReport(action.report).pipe(
          map(response => todoActions.editReportSuccess(response)),
          catchError((error: any) => of(todoActions.editReportFailure(error))))
      )
    )
  );

}
