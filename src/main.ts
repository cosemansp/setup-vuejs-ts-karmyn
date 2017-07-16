import Vue from 'vue';
import * as Logger from 'js-logger';

import { local, session } from './core/utils/storage';
import config from './config';

import App from './App.vue';
import router from './router';
import i18n from './i18n';

// add polyfills
import './polyfills';

// Load global styles
import './styles.scss';

import store from './store';

// Setup vue
Vue.config.productionTip = true;

// setup logger
Logger.useDefaults();
Logger.setLevel(config.logLevel);
const log = Logger.get('app');

// tslint:disable-next-line
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  template: '<App/>',
  components: { App },
  created() {
    log.info('Started');
    log.info('Config', JSON.stringify(config, null, '\t'));

    // setup localStorage prefix
    local.prefix = 'myApp';
    session.prefix = 'myApp';
  },
});
