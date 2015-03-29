import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['menu-link'],
  click: function(){
    var layout   = window.$('#layout');
    var menu     = window.$('#menu');
    var menuLink = window.$(this.get('element'));
    menu.toggleClass('active');
    layout.toggleClass('active');
    menuLink.toggleClass('active');
  }
});
