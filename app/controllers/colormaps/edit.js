import ColormapsBaseController from './base';

export default ColormapsBaseController.extend({
  actions: {
    cancel: function(){
      this.transitionToRoute('colormaps.show', this.get('model'));
      return false;
    }
  }
});
