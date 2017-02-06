import Ember from 'ember';
import layout from '../templates/components/ember-timepicker';
import { InvokeActionMixin } from 'ember-invoke-action';

const { Component, merge } = Ember;

export default Component.extend(InvokeActionMixin, {
  layout,
  tagName: 'input',
  classNames: ['ember-timepicker'],

  timepicker: null,
  options: {},

  didInsertElement() {
    this._super(...arguments);

    const options = merge({
      change: (...args) => this.invokeAction('onChange', ...args)
    }, this.get('options'));

    const timepicker = this.$().timepicker(options);
    this.set('timepicker', timepicker);
  },

  willDestroyElement() {
    this._super(...arguments);

    const timepicker = this.get('timepicker');

    if (timepicker.data('TimePicker') !== null) {
      timepicker.timepicker().destroy();
    }
  }
});
