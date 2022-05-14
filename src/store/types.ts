import { Store } from 'redux';
import { Task } from 'redux-saga';

export interface ISagaStore extends Store {
  sagaTask?: Task;
}

export interface IDataRequestState<PayloadType> {
  data: PayloadType;
  loading: boolean;
  error: boolean;
}

export interface INoDataRequestState {
  loading: boolean;
  error: boolean;
}

export type TRequestState<StateType = void> = StateType extends void
  ? INoDataRequestState
  : IDataRequestState<StateType>;
