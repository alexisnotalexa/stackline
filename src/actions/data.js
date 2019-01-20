import data from '../assets/Webdev_data2.json';

export const FETCH_DATA = 'FETCH_DATA';

export const fetchData = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: FETCH_DATA,
        data: data[0]
      });
    }, 500);
  }
};