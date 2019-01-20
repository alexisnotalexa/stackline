import { getData } from '../api/data';

export const FETCH_DATA = 'FETCH_DATA';

export const fetchData = () => {
  return dispatch => {
    getData()
      .then(data => {
        dispatch({
          type: FETCH_DATA,
          payload: data
        });
      });
  }
};