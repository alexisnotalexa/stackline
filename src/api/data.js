import data from '../assets/Webdev_data2.json';

export const getData = () => 
  new Promise(resolve => {
    setTimeout(() => resolve(data[0]), 500);
  });