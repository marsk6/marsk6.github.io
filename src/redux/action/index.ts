import * as actionType from '@/redux/action/actionType';
import { prefetch } from 'react-static';

export function setCurrentPost(payload) {
  return {
    type: actionType.SET_CURRENT_POST,
    payload,
  };
}

export function setHasInit(payload) {
  return {
    type: actionType.SET_HAS_INIT,
    payload,
  };
}
export function setAllPostData() {
  return async (dispatch) => {
    const payload = await prefetch('/');
    dispatch({ type: actionType.SET_ALL_POST_DATA, payload: payload });
  };
}
