import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(){
      console.log('- save action bubbled up to colormaps route');
      return true;
    },
    cancel: function(){
      console.log('- cancel action bubbled up to colormaps route');
      return true;
    },
    delete: function(colormap){
      var _this = this;
      colormap.destroyRecord().then(function(){
        _this.transitionTo('colormaps.index');
      });
    }
  }
});
