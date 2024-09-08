const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb://localhost/MovieDetails`, ()=> {
  console.log('connected to mongodb')
})
