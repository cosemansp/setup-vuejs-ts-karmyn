import axios from 'axios';
import config from '../../config';

import { applyDefaultInterceptors } from './interceptors';

// setup product api
export const cartApi = axios.create({
  baseURL: `${config.baseUrl}/cart`,
});
applyDefaultInterceptors(cartApi.interceptors);

export class CartService {
  getAll() {
    return cartApi.get('/').then((res) => {
      return res.data;
    });
  }
  getById(id) {
    return cartApi.get(`/${id}`).then((res) => {
      return res.data;
    });
  }
}

export default new CartService();
