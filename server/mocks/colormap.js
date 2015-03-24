module.exports = function(app) {
  var express = require('express');
  var colormapRouter = express.Router();

  colormapRouter.get('/', function(req, res) {
    res.send({
      'colormap': [{
          id:            "1",
          name:          "Terran",
          color_indexes: "0 15 70 80 90 200 233 255",
          colors:        "#273E5A #324858 #74B8A4 #8EA3A4 #476151 #958A73 #C7C596 #DCC511"
        },{
          id:            "2",
          name:          "Ocean",
          color_indexes: "0 40 80 130 150 160 180 200",
          colors:        "#0D2C35 #123339 #10463F #1F6A64 #5CC6A9 #AAD38E #4E9048 #183717"
        }
      ]
    });
  });

  colormapRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  colormapRouter.get('/:id', function(req, res) {
    res.send({
      'colormap': {
        id: req.params.id
      }
    });
  });

  colormapRouter.put('/:id', function(req, res) {
    res.send({
      'colormap': {
        id: req.params.id
      }
    });
  });

  colormapRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/colormaps', colormapRouter);
};
