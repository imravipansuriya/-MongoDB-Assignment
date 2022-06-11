const mongoose = require( "mongoose" ); 

const flightSchema = new mongoose.Schema(
  {
    flightNo: { type: Number, required: true, unique: true },
    travel_btw_cities: { type: String, required: true },
    flight_timmings : { type: String, required: true },
    planeCategory: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


const Flight = mongoose.model( "flights", flightSchema );
module.exports = Flight;