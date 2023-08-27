import { createAction, props } from '@ngrx/store';
import { Log } from '../entity';

export const GET_LOGS = '[Log] Get Logs';
export const GET_LOGS_SUCCESS = '[Log] Get Logs Success';
export const GET_LOGS_FAILURE = '[Log] Get Logs Failure';

export const CREATE_LOG = '[Log] Create Log';
export const CREATE_LOG_SUCCESS = '[Log] Create Log Success';
export const CREATE_LOG_FAILURE = '[Log] Create Log Failure';

export const DELETE_LOG = '[Log] Delete Log';
export const DELETE_LOG_SUCCESS = '[Log] Delete Log Success';
export const DELETE_LOG_FAILURE = '[Log] Delete Log Failure';

export const EDIT_LOG = '[Log] Edit Log';
export const EDIT_LOG_SUCCESS = '[Log] Edit Log Success';
export const EDIT_LOG_FAILURE = '[Log] Edit Log Failure';


export const getLogs = createAction(
  GET_LOGS
);

export const getLogsSuccess = createAction(
  GET_LOGS_SUCCESS,
  props<any>()
);

export const getLogsFailure = createAction(
  GET_LOGS_FAILURE,
  props<{any: any}>()
);

export const createLog = createAction(
  CREATE_LOG,
  props<{log: any}>()
);

export const createLogSuccess = createAction(
  CREATE_LOG_SUCCESS,
  props<any>()
);

export const createLogFailure = createAction(
  CREATE_LOG_FAILURE,
  props<{any: any}>()
);

export const deleteLog = createAction(
  DELETE_LOG,
  props<{logid: any}>()
);

export const deleteLogSuccess = createAction(
  DELETE_LOG_SUCCESS,
  props<any>()
);

export const deleteLogFailure = createAction(
  DELETE_LOG_FAILURE,
  props<{any: any}>()
);

export const editLog = createAction(
  EDIT_LOG,
  props<{log: any}>()
);

export const editLogSuccess = createAction(
  EDIT_LOG_SUCCESS,
  props<any>()
);

export const editLogFailure = createAction(
  EDIT_LOG_FAILURE,
  props<{any: any}>()
);
