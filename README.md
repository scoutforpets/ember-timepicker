# ember-timepicker

This is a simple Ember add-on that wraps the [http://timepicker.co/](http://timepicker.co/) jQuery plugin.

This plugin isn't your typical time picker (which I think is a good thing!), so be sure to [review the demos](http://timepicker.co/demos/) before installing.

## Usage

Using this bad boy is simple:

```hbs
// template.hbs
{{ember-timepicker
  onChange=(action 'onChange')
  options=yourOptions}}
```

```js
// controller.js
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
```

There are two key ways to interact with this component:

| Property        | Description         |
| --------------- |---------------------|
| `onChange`     | An action that's passed the `Date` object returned from the time picker. **Note:** the returned object is a Javascript `Date`, so you'll need to extract the time yourself.|
| `options`       | An object containing options accepted by the time picker. See [http://timepicker.co/options/](http://timepicker.co/options/) for available options.|

This component extends `Ember.TextField` and therefore can accept any actions or options available on that component. See the [API docs](http://emberjs.com/api/classes/Ember.Templates.helpers.html#method_input) for more information.

## Credits
Kudos to [Willington Vega](https://github.com/wvega) for writing the time picker plugin used in this project.
