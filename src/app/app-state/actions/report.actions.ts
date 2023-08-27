import { createAction, props } from '@ngrx/store';
import { Report } from '../entity';

export const GET_REPORTS = '[Report] Get Reports';
export const GET_REPORTS_SUCCESS = '[Report] Get Reports Success';
export const GET_REPORTS_FAILURE = '[Report] Get Reports Failure';

export const CREATE_REPORT = '[Report] Create Report';
export const CREATE_REPORT_SUCCESS = '[Report] Create Report Success';
export const CREATE_REPORT_FAILURE = '[Report] Create Report Failure';

export const DELETE_REPORT = '[Report] Delete Report';
export const DELETE_REPORT_SUCCESS = '[Report] Delete Report Success';
export const DELETE_REPORT_FAILURE = '[Report] Delete Report Failure';

export const EDIT_REPORT = '[Report] Edit Report';
export const EDIT_REPORT_SUCCESS = '[Report] Edit Report Success';
export const EDIT_REPORT_FAILURE = '[Report] Edit Report Failure';


export const getReports = createAction(
  GET_REPORTS
);

export const getReportsSuccess = createAction(
  GET_REPORTS_SUCCESS,
  props<any>()
);

export const getReportsFailure = createAction(
  GET_REPORTS_FAILURE,
  props<{any: any}>()
);

export const createReport = createAction(
  CREATE_REPORT,
  props<{report: any}>()
);

export const createReportSuccess = createAction(
  CREATE_REPORT_SUCCESS,
  props<any>()
);

export const createReportFailure = createAction(
  CREATE_REPORT_FAILURE,
  props<{any: any}>()
);

export const deleteReport = createAction(
  DELETE_REPORT,
  props<{reportid: any}>()
);

export const deleteReportSuccess = createAction(
  DELETE_REPORT_SUCCESS,
  props<any>()
);

export const deleteReportFailure = createAction(
  DELETE_REPORT_FAILURE,
  props<{any: any}>()
);

export const editReport = createAction(
  EDIT_REPORT,
  props<{report: any}>()
);

export const editReportSuccess = createAction(
  EDIT_REPORT_SUCCESS,
  props<any>()
);

export const editReportFailure = createAction(
  EDIT_REPORT_FAILURE,
  props<{any: any}>()
);
