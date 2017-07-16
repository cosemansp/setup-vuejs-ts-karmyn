import Vue from 'vue';
import Vuex from 'vuex';
import Component from 'vue-class-component';

import { IAppState } from '../store';
import { CART_INCREMENT } from '../store/mutation-types';

@Component(
  {
    // add more options here
  },
)
export default class Hello extends Vue {
  msg = 'Welcome to Your Vue.js App';
  store: Vuex.Store<IAppState> = this['$store'];

  constructor() {
    super();
    this.store.commit(CART_INCREMENT, 1);
  }
}
