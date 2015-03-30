import Ember from 'ember';

export default Ember.Controller.extend({
  selectedColormap: null,

  selectedColormapChanged: function(){
    this.get('model').set('colormap', this.get('selectedColormap'));
  }.observes('selectedColormap'),

  all_colormaps: function() {
    return this.store.find('colormap');
  }.property()
});
