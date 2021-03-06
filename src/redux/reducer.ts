import { combineReducers, Reducer, AnyAction } from 'redux';
import * as actionType from './action/actionType';

export interface Post {
  id: string;
  title: string;
  contents: string;
  toc: string;
}

export interface InitSideState {
  hasInit: boolean;
  category: { [name: string]: Post[] };
  archive: { [name: string]: Post[] };
  tag: { [name: string]: Post[] };
  currentPost: Post;
}

export const initSideState: InitSideState = {
  currentPost: null,
  category: {},
  archive: {},
  tag: {},
  hasInit: false,
};

const site: Reducer<InitSideState> = (
  state = initSideState,
  action: AnyAction
) => {
  switch (action.type) {
    case actionType.SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.payload,
      };
    case actionType.SET_HAS_INIT:
      return {
        ...state,
        hasInit: action.payload,
      };
    case actionType.SET_ALL_POST_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({ site });

export default rootReducer;
