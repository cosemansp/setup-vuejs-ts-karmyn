import Vue from 'vue';
// import VueI18n from 'vue-i18n';
// Vue.use(VueI18n);

Vue.config.productionTip = false;
Vue.config.devtools = false;

// require all test files (files that ends with .spec.js)
const testsContext = require.context('../src', true, /\.spec$/);
testsContext.keys().forEach(testsContext);
