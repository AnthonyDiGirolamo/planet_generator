module.exports = function(app) {
  var express = require('express');
  var heightmapRouter = express.Router();
  var height_maps = {
    "1": {
      id:       "1",
      name:     "Test Planet 1",
      map_type: 'sphere',
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
    res.send({ 'heightmap': height_maps[req.params.id] });
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
