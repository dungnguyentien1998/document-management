import { Action, createReducer, on } from '@ngrx/store';
import { Report } from '../entity';
import * as todoActions from '../actions';
import * as _ from 'lodash'
import * as storage from '../state/storage';

export interface State {
  reports?: Report[];
  currentReport?: Report;
  deleteReportId?: any;
  result?: any;
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
}

export const initialState: State = {
  reports: storage.getItem('todo').reports,
  currentReport: {},
  deleteReportId: '',
  result: '',
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};

const todoReducer = createReducer(
  initialState,

  // Gereports
  on(todoActions.getReports, (state) => ({...state, isLoading: true})),
  on(todoActions.getReportsSuccess, (state, result) => ({reports: result.response, isLoading: false, isLoadingSuccess: true})),

  // Create Report Reducers
  on(todoActions.createReport, (state, {report}) => ({...state, isLoading: true, currentReport: report})),
  on(todoActions.createReportSuccess, (state, result) => {
    const reports = undefined !== state.reports ? _.cloneDeep(state.reports) : [];
    const currentReport = undefined !== state.currentReport ? _.cloneDeep(state.currentReport) : {};
    currentReport.id = result.reportId;
    reports.push(currentReport);
    return {
      reports,
      isLoading: false,
      isLoadingSuccess: true
    };
  }),

  // Delete Report Reducers
  on(todoActions.deleteReport, (state, {reportid}) => ({...state, isLoading: true, deleteReportId: reportid})),
  on(todoActions.deleteReportSuccess, (state, result) => {
    let reports = undefined !== state.reports ? _.cloneDeep(state.reports) : [];
    if (result.status) {
      reports = reports.filter(report => report.id !== state.deleteReportId);
    }
    return {
      reports,
      isLoading: false,
      isLoadingSuccess: true
    };
  }),

   // Edit Report Reducers
   on(todoActions.editReport, (state, {report}) => ({...state, isLoading: true, currentReport: report})),
   on(todoActions.editReportSuccess, (state, result) => {
    let reports = undefined !== state.reports ? _.cloneDeep(state.reports) : [];
    const currentReport = undefined !== state.currentReport ? _.cloneDeep(state.currentReport) : {};
    reports = reports.map(tsk => {
      if (tsk.id === currentReport.id) {
        tsk = currentReport;
      }
      return tsk;
    });
    return {
      reports,
      isLoading: false,
      isLoadingSuccess: true
    };
  })
);

export function reducer(state: State | undefined, action: Action): any {
  return todoReducer(state, action);
}

export const getReports = (state: State) => {
  return {
    reports: state.reports,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  };
};
