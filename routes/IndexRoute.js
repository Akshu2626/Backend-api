const express = require('express');
const { Homepage, studentsignup, studentsignin, studentsignout } = require('../controller/indexController');
const routes = express.Router();

routes.get('/', Homepage);


routes.post('/signup', studentsignup);
routes.post('/signin', studentsignin);
routes.post('/signout', studentsignout);



module.exports = routes;

