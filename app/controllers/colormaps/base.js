import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.name',
    function(){
      return !Ember.isEmpty(this.get('model.name'));
    }
  ),

  actions: {
    save: function(){
      if (this.get('isValid')) {
        var _this = this;
        this.get('model').save().then(function(colormap){
          _this.transitionToRoute('colormaps.show', colormap);
        });
      } else {
        this.set('errorMessage', 'name is required');
      }
      // console.log('- save action in colormaps new controller');
      return false;
    },
    cancel: function(){
      return true;
    }
  }

});
