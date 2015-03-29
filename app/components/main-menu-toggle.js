import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['menu-link'],
  click: function(){
    var layout   = window.jQuery('#layout');
    var menu     = window.jQuery('#menu');
    var menuLink = window.jQuery(this.get('element'));
    var active_class = 'active';
    menu.toggleClass(active_class);
    layout.toggleClass(active_class);
    menuLink.toggleClass(active_class);
  }
});
