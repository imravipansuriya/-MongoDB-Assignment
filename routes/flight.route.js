const flightController = require("../controllers/flightsDetails.controller");

const flightRouter = require('express').Router();

flightRouter.get("/", flightController.getFlights);

module.exports = flightRouter;