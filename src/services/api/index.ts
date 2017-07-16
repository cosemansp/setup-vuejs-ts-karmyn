import axios from 'axios';
import config from '../../config';

import cart from './cart';
import product from './product';

// global axios setup
const AUTH_TOKEN = '*********';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.timeout = 2500; // timeout 2.5 sec

export default {
  cart,
  product,
};
