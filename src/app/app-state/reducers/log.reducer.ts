import { Action, createReducer, on } from '@ngrx/store';
import { Log } from '../entity';
import * as todoActions from '../actions';
import * as _ from 'lodash'
import * as storage from '../state/storage';

export interface State {
  logs?: Log[];
  currentLog?: Log;
  deleteLogId?: any;
  result?: any;
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
}

export const initialState: State = {
  logs: storage.getItem('todo').logs,
  currentLog: {},
  deleteLogId: '',
  result: '',
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};

const todoReducer = createReducer(
  initialState,

  // Gelogs
  on(todoActions.getLogs, (state) => ({...state, isLoading: true})),
  on(todoActions.getLogsSuccess, (state, result) => ({logs: result.response, isLoading: false, isLoadingSuccess: true})),

  // Create Log Reducers
  on(todoActions.createLog, (state, {log}) => ({...state, isLoading: true, currentLog: log})),
  on(todoActions.createLogSuccess, (state, result) => {
    const logs = undefined !== state.logs ? _.cloneDeep(state.logs) : [];
    const currentLog = undefined !== state.currentLog ? _.cloneDeep(state.currentLog) : {};
    currentLog.id = result.logId;
    logs.push(currentLog);
    return {
      logs,
      isLoading: false,
      isLoadingSuccess: true
    };
  }),

  // Delete Log Reducers
  on(todoActions.deleteLog, (state, {logid}) => ({...state, isLoading: true, deleteLogId: logid})),
  on(todoActions.deleteLogSuccess, (state, result) => {
    let logs = undefined !== state.logs ? _.cloneDeep(state.logs) : [];
    if (result.status) {
      logs = logs.filter(log => log.id !== state.deleteLogId);
    }
    return {
      logs,
      isLoading: false,
      isLoadingSuccess: true
    };
  }),

   // Edit Log Reducers
   on(todoActions.editLog, (state, {log}) => ({...state, isLoading: true, currentLog: log})),
   on(todoActions.editLogSuccess, (state, result) => {
    let logs = undefined !== state.logs ? _.cloneDeep(state.logs) : [];
    const currentLog = undefined !== state.currentLog ? _.cloneDeep(state.currentLog) : {};
    logs = logs.map(tsk => {
      if (tsk.id === currentLog.id) {
        tsk = currentLog;
      }
      return tsk;
    });
    return {
      logs,
      isLoading: false,
      isLoadingSuccess: true
    };
  })
);

export function reducer(state: State | undefined, action: Action): any {
  return todoReducer(state, action);
}

export const getLogs = (state: State) => {
  return {
    logs: state.logs,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  };
};
