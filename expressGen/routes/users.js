var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Users', users: [{firstname:'Andrew',lastname:'Yates'},
   {firstname: 'Jolly', lastname: 'Rogers'},{firstname: 'James', lastname: 'Bond'},
   {firstname: 'Jackmerrius', lastname: 'Tacktheratrix'},{firstname: 'X-wing', lastname: '@aliciousness'},
   {firstname: 'Minority', lastname: 'Boi'},{firstname: 'Black', lastname: 'Panther'}] });
});

module.exports = router;
