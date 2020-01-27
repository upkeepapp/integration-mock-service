const express = require('express');

module.exports = function (app) {
  const router = express.Router();

  router.post('/', function (req, res, next) {
    console.log(req.body)
    res.json({
      status: req.body.data
    });
  });

  app.use('/create', router);
}