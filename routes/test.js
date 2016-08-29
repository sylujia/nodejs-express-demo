var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('test');
});

router.get('/jia', function (req,res) {
    res.send('hello jia');
});

module.exports = router;

