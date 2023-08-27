import { createAction, props } from '@ngrx/store';
import { Request } from '../entity';

export const GET_REQUESTS = '[Request] Get Requests';
export const GET_REQUESTS_SUCCESS = '[Request] Get Requests Success';
export const GET_REQUESTS_FAILURE = '[Request] Get Requests Failure';

export const CREATE_REQUEST = '[Request] Create Request';
export const CREATE_REQUEST_SUCCESS = '[Request] Create Request Success';
export const CREATE_REQUEST_FAILURE = '[Request] Create Request Failure';

export const DELETE_REQUEST = '[Request] Delete Request';
export const DELETE_REQUEST_SUCCESS = '[Request] Delete Request Success';
export const DELETE_REQUEST_FAILURE = '[Request] Delete Request Failure';

export const EDIT_REQUEST = '[Request] Edit Request';
export const EDIT_REQUEST_SUCCESS = '[Request] Edit Request Success';
export const EDIT_REQUEST_FAILURE = '[Request] Edit Request Failure';


export const getRequests = createAction(
  GET_REQUESTS
);

export const getRequestsSuccess = createAction(
  GET_REQUESTS_SUCCESS,
  props<any>()
);

export const getRequestsFailure = createAction(
  GET_REQUESTS_FAILURE,
  props<{any: any}>()
);

export const createRequest = createAction(
  CREATE_REQUEST,
  props<{request: any}>()
);

export const createRequestSuccess = createAction(
  CREATE_REQUEST_SUCCESS,
  props<any>()
);

export const createRequestFailure = createAction(
  CREATE_REQUEST_FAILURE,
  props<{any: any}>()
);

export const deleteRequest = createAction(
  DELETE_REQUEST,
  props<{requestid: any}>()
);

export const deleteRequestSuccess = createAction(
  DELETE_REQUEST_SUCCESS,
  props<any>()
);

export const deleteRequestFailure = createAction(
  DELETE_REQUEST_FAILURE,
  props<{any: any}>()
);

export const editRequest = createAction(
  EDIT_REQUEST,
  props<{request: any}>()
);

export const editRequestSuccess = createAction(
  EDIT_REQUEST_SUCCESS,
  props<any>()
);

export const editRequestFailure = createAction(
  EDIT_REQUEST_FAILURE,
  props<{any: any}>()
);
