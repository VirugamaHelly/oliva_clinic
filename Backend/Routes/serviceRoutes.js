const express = require('express');
const serviceRouter = express.Router();
const serviceController = require('../Controller/serviceController');
const { isAdmin } = require('../Middleware/auth');

// Add service
serviceRouter.post('/add', isAdmin ,serviceController.addService);

// Get all services
serviceRouter.get('/', serviceController.getServices);

// Edit service
serviceRouter.put('/edit/:id',isAdmin, serviceController.editService);

// Delete service
serviceRouter.delete('/delete/:id',isAdmin, serviceController.deleteService);

module.exports = serviceRouter;
