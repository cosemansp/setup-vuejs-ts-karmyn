import Vuex from 'vuex';
import { IAppState } from '../../store';
import { CART_INCREMENT } from '../mutation-types';

export interface ICart {
  items: Array<any>;
  checkoutStatus: any;
}

// state
const state: ICart = {
  items: [],
  checkoutStatus: null,
};

// getters
const getters: Vuex.GetterTree<ICart, IAppState> = {
  checkoutStatus: (state, rootState) => state.checkoutStatus,
};

// actions
const actions: Vuex.ActionTree<ICart, IAppState> = {
  // add your actions here
};

// mutations
const mutations: Vuex.MutationTree<ICart> = {
  CART_INCREMENT(state: ICart) {
    state.items.push('aaaaa');
  },
};

export const cart = {
  state,
  getters,
  actions,
  mutations,
};
