/* eslint-disable class-methods-use-this */
const shortUrlSchema = require('../models/shortUrl');

class ShortUrlController {
  async getAll() {
    const shortUrls = await shortUrlSchema.find();
    return shortUrls;
  }

  async create(req, res) {
    await shortUrlSchema.create({ full: req.body.fullUrl });
    return res.redirect('/');
  }

  async getByShortUrl(req, res) {
    const { shortUrl } = req.params;
    const data = await shortUrlSchema.findOne({ short: shortUrl });
    if (data == null) return res.sendStatus(404);

    data.clicks += 1;
    data.save();

    return res.redirect(data.full);
  }
}

module.exports = new ShortUrlController();
