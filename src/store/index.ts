import Vue from 'vue';
import Vuex from 'vuex';
import config from '../config';
import { cart, ICart } from './modules/cart';
import { product, IProduct } from './modules/products';

// need to import this with require
const createLogger = require('vuex/dist/logger');

Vue.use(Vuex);

// rootState
export interface IAppState {
  cart: ICart;
  product: IProduct;
}

// debug setup
const debug = config.env === 'dev';
const logger = createLogger({
  collapsed: false, // auto-expand logged mutations
});

export default new Vuex.Store({
  strict: debug,
  plugins: debug ? [ logger ] : [],
  modules: {
    cart,
    product,
  },
});
