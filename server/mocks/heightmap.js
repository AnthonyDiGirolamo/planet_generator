module.exports = function(app) {
  var express = require('express');
  var heightmapRouter = express.Router();
  var height_maps = {
    "1": {
      id:       "1",
      name:     "Earth",
      map_type: "sphere",
      colormap: "1",
      width:    1024,
      height:   1024,
    },
  }

  heightmapRouter.get('/', function(req, res) {
    res.send({
      'heightmap': Object.keys(height_maps).map(function(k) { return height_maps[k]; })
    });
  });

  heightmapRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  heightmapRouter.get('/:id', function(req, res) {
    res.send({ 'heightmap': height_maps[req.params.id],
      'colormap': [{
      id:            "1",
      name:          "Terran",
      color_indexes: "0 15 70 80 90 200 233 255",
      colors:        "#273E5A #324858 #74B8A4 #8EA3A4 #476151 #958A73 #C7C596 #DCC5AD",
      noise_octaves: 6.0,
      noise_zoom:    1.0,}]
    });
  });

  heightmapRouter.put('/:id', function(req, res) {
    res.send({
      'heightmap': {
        id: req.params.id
      }
    });
  });

  heightmapRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/heightmaps', heightmapRouter);
};
