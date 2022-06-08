const express = require('express')
const bodyParser = require('body-parser');
const flightRouter = require("./routes/flight.route");
const app = express();
const makeDatabaseConnection =require("./mongo/db")
const port = process.env.PORT || 5000;
 
app.use(bodyParser.json());
makeDatabaseConnection();
app.use("/flights", flightRouter);


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});