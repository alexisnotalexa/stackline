import { FETCH_DATA } from '../actions/data.js';

const initialState = [];

const data = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA:
      let data = [...state, action.data];
      return data;
    default:
      return state;
  }
}

export default data;