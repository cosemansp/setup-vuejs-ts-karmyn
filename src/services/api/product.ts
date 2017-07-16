import axios from 'axios';
import config from '../../config';

import { applyDefaultInterceptors } from './interceptors';

// setup product api
export const productApi = axios.create({
  baseURL: `${config.baseUrl}/product`,
});
applyDefaultInterceptors(productApi.interceptors);

export class ProductService {
  getAll() {
    return productApi.get('/').then((res) => {
      return res.data;
    });
  }
  getById(id) {
    return productApi.get(`/${id}`).then((res) => {
      return res.data;
    });
  }
}

export default new ProductService();
