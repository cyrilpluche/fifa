var express = require('express');
var router = express.Router();
var matchController = require('../controllers/index').match

/* GET users listing. */
router.get('/find_all', matchController.findAll);

router.post('/create', matchController.create);
router.post('/update', matchController.update);
router.post('/delete', matchController.delete);

module.exports = router;