import axios from 'axios';

const instance = axios.create(
  {baseURL: 'https://react-burger-c8f5b.firebaseio.com'},
);

export default instance;