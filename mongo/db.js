const mongooes = require('mongoose');
 
const mongoUrl = 'mongodb+srv://ravi:ravi@cluster0.p6rse.mongodb.net/replit?retryWrites=true&w=majority'

const makeDatabaseConnection = () =>{
  mongooes.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then( ()=>{
    console.log("Connected to mongoDB")
  }).catch(err =>{
    console.log(err);
  })
}

module.exports = makeDatabaseConnection;