import { FETCH_DATA } from '../actions/data.js';

const initialState = {
  product: [],
  loading: true
};

const data = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA:
      return {
        ...state,
        product: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

export default data;