import Ember from 'ember';

export default Ember.Controller.extend({
  colormaps: function() {
    return this.store.find('colormap');
  }.property()
});
