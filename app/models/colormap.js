import DS from 'ember-data';

export default DS.Model.extend({
  name:          DS.attr('string'),
  colors:        DS.attr('string'),
  color_indexes: DS.attr('string'),
  heightmap:     DS.belongsTo('heightmap'),

  color_count: function(){
    return this.get('colors').split(/\s+/).length;
  }.property('colors'),
  gradient_css: function(){
    var g = tinygradient(_.map(_.zip(this.get("colors").split(' '), this.get("color_indexes").split(' ')), function(a){ return {"color": a[0], "pos": parseInt(a[1]) / 255.0} }));

    return 'background:' + g.css() + ';height:48px;width:100%;'
  }.property('colors', 'color_indexes')
});
