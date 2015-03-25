import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(colormap, width, height){
  var canvas = `<canvas width="${width}" height="${height}">`
  canvas += '</canvas>'
  console.log(canvas);
  $('#canvas-console').append(canvas);
  // return new Ember.Handlebars.SafeString(canvas);
});

// Ember.Handlebars.helper('linear-gradient', function(input) {
// return new Ember.Handlebars.SafeString('<div class="gradient" style="background:'+ input.css() + ';width:'+ (input.stops.length*59) + 'px;"></div>');
// });
