import ColormapsBaseController from './base';

export default ColormapsBaseController.extend({
  actions: {
    cancel: function(){
      this.transitionToRoute('colormaps');
      return false;
    }
  }
});
