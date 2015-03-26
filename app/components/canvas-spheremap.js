import Ember from 'ember';
import { gradientRGB } from '../utils/gradient-helpers';
import { sumOctave } from '../utils/noise-helpers';

export default Ember.Component.extend({
  tagName: 'canvas',
  width: 100,
  height: 100,
  seed: 1,
  color_json: null,
  octaves: 1.0,
  scale: 1.0,
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

    var start = Date.now();

    var image = ctx.createImageData(this.get('width'), this.get('height'));
    var data = image.data;
    var colors = gradientRGB(this.get('color_json'));
    window.noise.seed(this.get('seed'));
    for (var x = 0; x < this.get('width'); x++) {
      //if (x % 100 == 0) {
      //}
      for (var y = 0; y < this.get('height'); y++) {
        // var value = Math.abs(noise.perlin2(x / 50, y / 50));
        var value = sumOctave(this.get('octaves'), x/100, y/100, 0.5, this.get('scale'), 0, 255)
        value = Math.floor(value);
        var cell = (x + y * this.get('width')) * 4;
        data[cell] = data[cell + 1] = data[cell + 2] = value;
        data[cell] += Math.max(0, (25 - value) * 8);
        data[cell]   = colors[value].toRgb()["r"];
        data[cell+1] = colors[value].toRgb()["g"];
        data[cell+2] = colors[value].toRgb()["b"];
        data[cell + 3] = 255; // alpha.
      }
    }
    var end = Date.now();

    ctx.putImageData(image, 0, 0);
    console.log('Rendered in ' + (end - start) + ' ms');
  }.observes('seed', 'width', 'height', 'color_json'),

});
