

const ticketRouter = require('express').Router();
const Ticket = require('../schema/tickets')

ticketRouter.get("/", async (req, res) => {
        try {
            const tickets = await Ticket.find({}).populate( "flight" );
            return res.status(200).json({message: "tickets",data: tickets})
        } catch (err) {
            console.log(err)
            return res.status(400).send({
                message: "Error in getting Ticket"
            })
        }});

ticketRouter.post("/", async (req, res) => {
        try {
            const tickets = await Ticket.create(req.body);
            return res.status(201).json({message:"Ticket addes",data: tickets})
        } catch (err) {
            console.log(err)
            return res.status(400).send({
                message: "Error in creating Ticket"
            })
        }});

module.exports = ticketRouter;