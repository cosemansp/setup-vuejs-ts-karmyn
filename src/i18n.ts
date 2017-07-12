import Vue from 'vue';
import VueI18n from 'vue-i18n';
import config from './config';

// apply to vue
Vue.use(VueI18n);

// messages
const messages = {
  en: {
    home: {
      hello: 'Hello world',
    },
  },
  fr: {
    home: {
      hello: 'Bonjour tout le monde',
    },
  },
};

const i18n = new VueI18n({
  locale: config.defaultLanguage,
  messages,
});

export default i18n;
