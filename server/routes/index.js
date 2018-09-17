const express = require('express');
const router = express.Router();

/* ========== routes ========== */
router.use('/player', require("./player"));
router.use('/match', require("./match"));

module.exports = router;
