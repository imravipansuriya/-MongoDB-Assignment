const flightData = mongooes.model("flightsdetails");

const flightController = {
   
     getFlights: async ('/', (req, res) => {
        try {
            const flights = await flightData.find({});
            return res.status(200).json({message: "flights",data: flights})
        } catch (err) {
            console.log(err)
            return res.status(400).send({
                message: "Error in getting flights"
            })
        }
    },
   
 }

model.exports = flightController;