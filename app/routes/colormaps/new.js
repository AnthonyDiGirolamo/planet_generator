import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('colormap');
  },
  // actions: {
  //   save: function(){
  //     console.log('- save action in colormaps new route');
  //     return true;
  //   },
  //   cancel: function(){
  //     console.log('- cancel action in colormaps new route');
  //     return true;
  //   }
  // }
  deactivate: function(){
    var model = this.modelFor('colormaps/new');
    if (model.get('isNew')) {
      model.destroyRecord();
    }
  }
});
