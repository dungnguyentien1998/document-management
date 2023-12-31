import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../../environments/environment';
import * as fromUser from './reducers/user.reducer';
import * as fromTodo from './reducers/report.reducer';
import * as fromLog from './reducers/log.reducer';
import * as fromRequest from './reducers/request.reducer';

export interface State {
  user: fromUser.State;
  todo: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer,
  todo: fromTodo.reducer,
};

const reducerKeys = ['user', 'todo'];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: reducerKeys})(reducer);
}

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}


export const metaReducers: MetaReducer<State>[] = !environment.production ? [debug, localStorageSyncReducer] : [localStorageSyncReducer];

export const getLoginState = createFeatureSelector<fromUser.State>('user');

export const getLoggedInUser = createSelector(
  getLoginState,
  fromUser.getLoggedInUser
);

export const userLogin = createSelector(
  getLoginState,
  fromUser.userLogin
);

export const userSignup = createSelector(
  getLoginState,
  fromUser.userSignup
);


// Todo reducers Begin

export const geTodoState = createFeatureSelector<fromTodo.State>('todo');

export const getReports = createSelector(
  geTodoState,
  fromTodo.getReports
);

// Todo reducers Begin

export const getLogState = createFeatureSelector<fromLog.State>('log');

export const getLogs = createSelector(
  getLogState,
  fromLog.getLogs
);

// Todo reducers Begin

export const getRequestState = createFeatureSelector<fromRequest.State>('request');

export const getRequests = createSelector(
  getRequestState,
  fromRequest.getRequests
);
