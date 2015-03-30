import DS from 'ember-data';
import { gradientCSS, gradientRGB } from '../utils/gradient-helpers';

var ColorMap = DS.Model.extend({
  name:          DS.attr('string'),
  heightmap:     DS.hasMany('heightmap', {async: true}),
  colors:        DS.attr('string'),
  color_indexes: DS.attr('string'),
  noise_octaves: DS.attr('number'),
  noise_zoom:    DS.attr('number'),

  color_count: Ember.computed('colors', function(){
    return this.get('colors').split(/\s+/).length;
  }),

  color_json: function(){
    return _.zip( this.get("colors").split(' '), this.get("color_indexes").split(' ') )
      .map( a => {
        return {"color": a[0], "pos": parseInt(a[1]) / 255.0};
      });
  }.property('colors', 'color_indexes'),

  gradient_css: function(){
    return `background:${gradientCSS(this.get('color_json'))};`;
  }.property('color_json'),

  gradient_rgb: function(){
    return gradientRGB(this.get('color_json'));
  }.property('color_json')
});

ColorMap.reopenClass({
  FIXTURES: [
    {
      id:            "1",
      name:          "Terran",
      color_indexes: "0 15 70 80 90 200 233 255",
      colors:        "#273E5A #324858 #74B8A4 #8EA3A4 #476151 #958A73 #C7C596 #DCC5AD",
      noise_octaves: 6.0,
      noise_zoom:    1.0,},

    {
      id:            "2",
      name:          "Ocean",
      color_indexes: "0 40 80 130 150 160 180 200",
      colors:        "#0D2C35 #123339 #10463F #1F6A64 #5CC6A9 #AAD38E #4E9048 #183717",
      noise_octaves: 6.0,
      noise_zoom:    1.0,},

    {
      id:            "3",
      name:          "Jungle",
      colors:        "#1D3570 #4589C8 #3D5622 #2A4826 #346723 #1D2F12 #4B7621 #64AD16",
      color_indexes: "0 60 80 110 150 205 235 255",
      noise_octaves: 6.0,
      noise_zoom:    3.0,},

    {
      id:            "4",
      name:          'Lava',
      colors:        "#FF9713 #FF3400 #5B1F0C #1F150B #382C15 #000000 #3E130F #5E4123",
      color_indexes: "0 60 80 110 150 205 235 255",
      noise_octaves: 6.0,
      noise_zoom:    6.0,},

    {
      id:            "5",
      name:          "Tundra",
      colors:        "#79B7AA #A7CEAE #919675 #6E745D #A79D6D #566F5F #D2C784 #FFFFC8",
      color_indexes: "0 60 75 105 140 200 235 255",
      noise_octaves: 6.0,
      noise_zoom:    2.0,},

    {
      id:            "6",
      name:          "Arid",
      colors:        "#79B7AA #A7CEAE #7E5624 #A35E2D #EB832C #AE731D #704523 #291E14",
      color_indexes: "0 60 75 90 140 180 225 255",
      noise_octaves: 6.0,
      noise_zoom:    3.0,},

    {
      id:            "7",
      name:          "Desert",
      colors:        "#FFB23A #E5A34E #FF963D #EB832C #AE731D #A35E2D #704523 #442F31",
      color_indexes: "0 30 40 80 140 200 244 255",
      noise_octaves: 6.0,
      noise_zoom:    3.0,},

    {
      id:            "8",
      name:          "Artic",
      colors:        "#FFFFF0 #DDF5C1 #9DC6A0 #869871 #9AA674 #D0D39C #ACC69B #FFFFFF",
      color_indexes: "0 60 100 120 140 170 175 255",
      noise_octaves: 6.0,
      noise_zoom:    1.0,},

    {
      id:            "9",
      name:          "Barren",
      colors:        "#27292C #585D43 #6F6D4E #979871 #978D65 #C6BD85 #646551 #F7ECB1",
      color_indexes: "0 30 60 85 100 120 180 255",
      noise_octaves: 6.0,
      noise_zoom:    2.5,},

    {
      id:            "10",
      name:          "Gas Giant",
      colors:        "#3E6378 #5689AD #70C7F2 #73D6FF #A2D4EA #EDECFF #DEFFFF #FFFFFF",
      color_indexes: "0 40 80 100 120 190 210 255",
      noise_octaves: 4.0,
      noise_zoom:    3.0,},
  ]
});

export default ColorMap;
