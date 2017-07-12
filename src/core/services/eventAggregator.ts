import Vue from 'vue';

export class EventAggregator {
  vue: Vue;

  constructor() {
    this.vue = new Vue();
  }

  /**
   * Publish an event
   * Example:
   *
   * eventAggregator.fire('ERROR', { desc: 'bad bad bad' })
   */
  public publish(event: string, data: any = null) {
    this.vue.$emit(event, data);
  }

  /**
   * Listen for events
   * Example:
   *
   * eventAggregator.listen('myEvent', (value) => {
   *     console.log('handle it: ', value)
   * })
   *
   */
  public listen(event: string, callback: Function) {
    this.vue.$on(event, callback);
  }
}
export const eventAggregator = new EventAggregator();
