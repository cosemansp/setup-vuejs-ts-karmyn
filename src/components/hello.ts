import Vue from 'vue';

// more info: https://github.com/vuejs/vue-class-component
import Component from 'vue-class-component';

/**
 * Alternative import template as string and
 * attach to component.
 */
// import template from './hello.html';
//
// @Component({
//   template,
// })
// export default class Hello extends Vue {
// }

@Component
export default class Hello extends Vue {
  msg = 'Welcome to Your Vue.js App';

  constructor() {
    super();
  }
}
