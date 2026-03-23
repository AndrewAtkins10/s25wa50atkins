var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function(req, res, next) {
  let x = req.query.x ? parseFloat(req.query.x) : Math.random() * 100;
  
  let result1 = Math.abs(x);
  let result2 = Math.sin(x);

  let responseString = `Math.abs() applied to ${x} is ${result1}; Math.sin() applied to ${x} is ${result2}`;

  res.render('computation', { 
    title: 'Bonus Computation', 
    result: responseString 
  });
});

module.exports = router;