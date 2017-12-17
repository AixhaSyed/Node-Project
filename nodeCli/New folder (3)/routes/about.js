var express = require('express');
var router = express.Router();

router.get('/about', function(req, res, next){
    console.log('helllloooooooooo abouttttttt');
    res.send('helloooo');
});

module.exports = router;
