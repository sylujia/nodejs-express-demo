var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('test 中文测试');
});

router.get('/jia', function (req,res) {
    res.send('你好 jia');
});

module.exports = router;

