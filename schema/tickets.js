const mongoose = require( "mongoose" ); 

const ticketsSchema = new mongoose.Schema(
  {
    flight: { type: mongoose.Schema.Types.ObjectId, ref: "flights" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


const Tickets = mongoose.model( "tickets", ticketsSchema );
module.exports = Tickets;