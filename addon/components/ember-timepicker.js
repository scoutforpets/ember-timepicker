import Ember from 'ember';
import layout from '../templates/components/ember-timepicker';
import { InvokeActionMixin } from 'ember-invoke-action';

const { Component, TextField, merge } = Ember;

export default TextField.extend(InvokeActionMixin, {
  layout,

  classNames: ['ember-timepicker'],

  timepicker: null,
  options: {},

  didInsertElement() {
    this._super(...arguments);

    // Connect the `onChange` action to this library's `change` event.
    const options = merge({
      change: (...args) => this.invokeAction('onChange', ...args)
    }, this.get('options'));

    // Create a new instance of the timepicker.
    const timepicker = this.$().timepicker(options);
    this.set('timepicker', timepicker);
  },

  willDestroyElement() {
    this._super(...arguments);

    const timepicker = this.get('timepicker');

    // If the timepicker exists, destroy it on our way out
    if (timepicker.data('TimePicker') !== null) {
      timepicker.timepicker().destroy();
    }
  }
});
