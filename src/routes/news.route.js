const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/newsController');

router.use('/:slug', newsController.newsDetails);
router.use('/', newsController.news);

module.exports = router; 