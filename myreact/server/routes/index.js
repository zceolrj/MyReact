var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/*', function(req, res, next) {
  console.log('server routes index.js, url is ', req.originalUrl);

  var html = path.resolve(__dirname, '../../client/index.html');

  res.sendFile(html);
});

module.exports = router;
