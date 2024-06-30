const express = require('express');
const { Homepage } = require('../controller/indexController');
const routes = express.Router();

routes.get('/', Homepage);


module.exports = routes;

