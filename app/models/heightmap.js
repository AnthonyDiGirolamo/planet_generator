import DS from 'ember-data';

export default DS.Model.extend({
  name:     DS.attr('string'),
  colormap: DS.belongsTo('colormap', {async: true}),
  width:    DS.attr('number'),
  height:   DS.attr('number'),
  map_type: DS.attr('string'),
});

