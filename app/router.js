import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('colormaps', { path: '/colormaps' }, function() {});
  this.resource('colormap', { path: '/colormap/:colormap_id' }, function() {});
  this.resource('heightmap', function() {});
});

export default Router;
