import { ICart } from './modules/cart';
import { IProduct } from './modules/products';

export interface IAppState {
  cart: ICart;
  product: IProduct;
}
