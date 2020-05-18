import { SEARCH_USERS, GET_USER, SET_LOADING, CLEAR_USERS, GET_REPOS } from '../types';

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
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    default:
      return state;
  }
};
