var express = require('express');
var router = express.Router();

const maria = require('../maria')

/* GET home page. */
router.get('/', function(req, res, next) {
  maria.query('select * from testuser', function(err, rows, fields) {
    if (!err) {
      res.send(rows);
    } else {
      console.log('err: ', err);
      res.send(err);
    }
  })
  //res.render('index', { title: 'Express' });
});

module.exports = router;
