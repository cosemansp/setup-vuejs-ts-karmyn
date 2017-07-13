import { mount } from 'avoriaz';

// by using hello.vue.d.ts we can import typed vue files
// import Hello from './hello.vue';
// const component = new Hello();

import Hello from './hello';
import HelloComponent from './hello.vue';
const $t = function(arg) {
  return arg;
};
describe('Hello Component', () => {
  it('should have a default "msg" set to "Welcome"', () => {
    const component = new Hello();
    expect(component.msg).toMatch('Welcome');
  });

  it('should renders correctly', () => {
    // render component as a single unit
    const fixture = mount(HelloComponent, {
      globals: { $t },
    });
    fixture.setData({ msg: 'Hello World' });
    const p = fixture.find('p')[0];
    expect(p.text()).toEqual('home.hello');
  });
});
