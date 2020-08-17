require('dotenv/config');
const express = require('express');
const routes = require('./routes/index');
require('./config/mongo');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.set('view engine', 'ejs');
    this.server.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
