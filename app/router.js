import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('colormaps', function() {
    this.route('show', {path: ':colormap_id'}, function() {});
    this.route('edit', {path: ':colormap_id/edit'}, function() {});
    this.route('new');
  });
  this.resource('heightmaps', function() {
    this.route('show',  {path: ':heightmap_id'}, function() {});
  });
});

export default Router;
