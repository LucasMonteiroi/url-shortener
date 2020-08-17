const express = require('express');
const shortUrlController = require('../controllers/shortUrlController');

const routes = express.Router();

routes.get('/', async (req, res) => {
  const shortUrls = shortUrlController.getAll();
  res.render('index', { shortUrls });
});

routes.post('/shortUrl', async (req, res) => shortUrlController.create(req, res));
routes.get('/:shortUrl', async (req, res) => shortUrlController.getByShortUrl(req, res));

module.exports = routes;
