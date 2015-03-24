import Ember from 'ember';

// var colormaps = [{
//   id:            "1",
//   name:          "Terran",
//   color_indexes: "0 15 70 80 90 200 233 255",
//   colors:        "#273E5A #324858 #74B8A4 #8EA3A4 #476151 #958A73 #C7C596 #DCC511"
// },{
//   id:            "2",
//   name:          "Ocean",
//   color_indexes: "0 40 80 130 150 160 180 200",
//   colors:        "#0D2C35 #123339 #10463F #1F6A64 #5CC6A9 #AAD38E #4E9048 #183717"
// }];

export default Ember.Route.extend({
  model: function() {
    return this.store.find('colormap');
    // var url = '/api/colormap';
    // return Ember.$.getJSON(url).then(function(data){
    //   return data['colormap'];
    // });
  }
});
