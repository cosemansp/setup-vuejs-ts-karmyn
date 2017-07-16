import Vuex from 'vuex';
import { IAppState } from '../../store';

export interface IProduct {
  all: Array<any>;
}

// state
const state: IProduct = {
  all: [],
};

// getters
const getters: Vuex.GetterTree<IProduct, IAppState> = {
  // add getter here
};

// actions
const actions: Vuex.ActionTree<IProduct, IAppState> = {
  // add your actions here
};

// mutations
const mutations: Vuex.MutationTree<IProduct> = {
  // increment(state: IProduct) {
  //   ...
  // },
};

export const product = {
  state,
  getters,
  actions,
  mutations,
};
