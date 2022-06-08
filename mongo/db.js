const mongooes = require('mongoose');

const mongoUrl = 'mongodb://localhost:27017/tigris'

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