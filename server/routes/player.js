var express = require('express');
var router = express.Router();
var playerController = require('../controllers/index').player

/* GET users listing. */
router.get('/find_all', playerController.findAll);
router.get('/find_one/:id', playerController.findOne);

router.post('/create', playerController.create);
router.post('/update', playerController.update);
router.post('/delete', playerController.delete);

module.exports = router;
