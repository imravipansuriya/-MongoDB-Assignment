const express = require('express')
const bodyParser = require('body-parser');
const flightRouter = require("./routes/flight.route");
const ticketRouter = require('./routes/ticket.route')
const app = express();
const makeDatabaseConnection =require("./mongo/db")
const port = process.env.PORT || 5000;
 
app.use(bodyParser.json());
app.use("/flights", flightRouter);
app.use("/tickets", ticketRouter);


app.listen(port,  () => {
 makeDatabaseConnection();
  console.log(`Server running on port ${port}`)
});