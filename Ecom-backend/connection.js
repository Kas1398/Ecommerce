require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = "mongodb+srv://Ourproject:kassuhandoro@cluster0.ge9flii.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connectionStr, { useNewUrlparser: true })
  .then(() => console.log('connected to mongodb'))
  .catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})
