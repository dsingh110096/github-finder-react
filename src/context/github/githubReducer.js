import {
  SEARCH_USERS,
  GET_USER,
  SET_LOADING,
  CLEAR_USERS,
  SET_ALERT,
  REMOVE_ALERT,
  GET_REPOS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        //here spread operator copying current state as it means here loading:false
        ...state,
        //now making changes in to state so loading becomes true
        loading: true,
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
