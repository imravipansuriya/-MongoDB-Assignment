

const flightRouter = require('express').Router();
const Flight = require('../schema/flights')

flightRouter.get("/", async (req, res) => {
        try {
            const flights = await Flight.find({});
            return res.status(200).json({message: "flights",data: flights})
        } catch (err) {
            console.log(err)
            return res.status(400).send({
                message: "Error in getting flights"
            })
        }});

flightRouter.post("/", async (req, res) => {
        try {
            const flights = await Flight.create(req.body);
            return res.status(201).json({message:         "flight addes",data: flights})
        } catch (err) {
            console.log(err)
            return res.status(400).send({
                message: "Error in creating flights"
            })
        }});

module.exports = flightRouter;