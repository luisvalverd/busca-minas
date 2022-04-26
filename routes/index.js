var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Busca Minas' });
});

router.get("/menu", function (req, res, next) {
  res.render("menu");
}); 

module.exports = router;
