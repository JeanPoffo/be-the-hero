const express = require('express');

const SessionController = require('./controller/SessionController');
const OngController = require('./controller/OngController');
const ProfileController = require('./controller/ProfileController');
const IncidentController = require('./controller/IncidentController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',  IncidentController.delete);

module.exports = routes;