import DS from 'ember-data';

var HeightMap = DS.Model.extend({
  name:     DS.attr('string'),
  colormap: DS.belongsTo('colormap', {async: true}),
  width:    DS.attr('number'),
  height:   DS.attr('number'),
  seed:     DS.attr('number'),
  map_type: DS.attr('string'),
});

HeightMap.reopenClass({
  FIXTURES: [
    {
      id:       "1",
      name:     "Earth",
      map_type: "sphere",
      colormap: "1",
      width:    320,
      height:   240,
      seed:     123456789,
    },
  ]
});

export default HeightMap;
