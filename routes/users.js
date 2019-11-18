var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send({
        "_id": "123456",
        "email": "user@test.com",
        "lastName": "Bonds",
        "firstName": "James"
    });
});

module.exports = router;
