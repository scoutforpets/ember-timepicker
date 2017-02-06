import Ember from 'ember';

export default Ember.Controller.extend({

    options: {
      dropdown: false
    },

    actions: {
        onChange(selectedTime) {
            console.log(selectedTime);
        }
    }
});
