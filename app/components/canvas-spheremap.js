import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'canvas',
  width: 100,
  height: 100,
  seed: 1,
  colormap: false,
  attributeBindings: ['width', 'height'],

  didInsertElement: function(){
    this.set('ctx', this.get('element').getContext('2d'));
    this.draw();
  },
  _empty: function(){
    var ctx = this.get('ctx');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, this.get('width'), this.get('height'));
  },
  draw: function(){
    this._empty();
    var ctx = this.get('ctx');
    ctx.fillStyle = '#00FF00';
    ctx.fillRect(0, 0, this.get('width'), this.get('height'));
  }

});
