import DS from 'ember-data';

export default DS.Model.extend({
  name:          DS.attr('string'),
  colors:        DS.attr('string'),
  color_indexes: DS.attr('string'),
  heightmap:     DS.belongsTo('heightmap'),
  noise_octaves: DS.attr('number'),
  noise_zoom:    DS.attr('number'),

  color_count: function(){
    return this.get('colors').split(/\s+/).length;
  }.property('colors'),

  color_json: function(){
    return _.zip( this.get("colors").split(' '), this.get("color_indexes").split(' ') )
      .map( a => {
        return {"color": a[0], "pos": parseInt(a[1]) / 255.0};
      });
  }.property('colors', 'color_indexes'),

  gradient_css: function(){
    var g = tinygradient(this.get('color_json'));
    return `background:${g.css()};height:48px;width:100%;`;
  }.property('color_json'),

  gradient_rgb: function(){
    var g = tinygradient(this.get('color_json'));
    return console.log(g.rgb(256));
  }.property('color_json')
});
