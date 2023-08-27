import { Action, createReducer, on } from '@ngrx/store';
import { Request } from '../entity';
import * as todoActions from '../actions';
import * as _ from 'lodash'
import * as storage from '../state/storage';

export interface State {
  requests?: Request[];
  currentRequest?: Request;
  deleteRequestId?: any;
  result?: any;
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
}

export const initialState: State = {
  requests: storage.getItem('todo').requests,
  currentRequest: {},
  deleteRequestId: '',
  result: '',
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};

const todoReducer = createReducer(
  initialState,

  // Gerequests
  on(todoActions.getRequests, (state) => ({...state, isLoading: true})),
  on(todoActions.getRequestsSuccess, (state, result) => ({requests: result.response, isLoading: false, isLoadingSuccess: true})),

  // Create Request Reducers
  on(todoActions.createRequest, (state, {request}) => ({...state, isLoading: true, currentRequest: request})),
  on(todoActions.createRequestSuccess, (state, result) => {
    const requests = undefined !== state.requests ? _.cloneDeep(state.requests) : [];
    const currentRequest = undefined !== state.currentRequest ? _.cloneDeep(state.currentRequest) : {};
    currentRequest.id = result.requestId;
    requests.push(currentRequest);
    return {
      requests,
      isLoading: false,
      isLoadingSuccess: true
    };
  }),

  // Delete Request Reducers
  on(todoActions.deleteRequest, (state, {requestid}) => ({...state, isLoading: true, deleteRequestId: requestid})),
  on(todoActions.deleteRequestSuccess, (state, result) => {
    let requests = undefined !== state.requests ? _.cloneDeep(state.requests) : [];
    if (result.status) {
      requests = requests.filter(request => request.id !== state.deleteRequestId);
    }
    return {
      requests,
      isLoading: false,
      isLoadingSuccess: true
    };
  }),

   // Edit Request Reducers
   on(todoActions.editRequest, (state, {request}) => ({...state, isLoading: true, currentRequest: request})),
   on(todoActions.editRequestSuccess, (state, result) => {
    let requests = undefined !== state.requests ? _.cloneDeep(state.requests) : [];
    const currentRequest = undefined !== state.currentRequest ? _.cloneDeep(state.currentRequest) : {};
    requests = requests.map(tsk => {
      if (tsk.id === currentRequest.id) {
        tsk = currentRequest;
      }
      return tsk;
    });
    return {
      requests,
      isLoading: false,
      isLoadingSuccess: true
    };
  })
);

export function reducer(state: State | undefined, action: Action): any {
  return todoReducer(state, action);
}

export const getRequests = (state: State) => {
  return {
    requests: state.requests,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  };
};
