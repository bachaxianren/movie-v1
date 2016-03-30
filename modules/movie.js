var mongoose = require("mongoose");
var MovieShema = require('../schemas/movies');
var Movie = mongoose.model('Movie',MovieShema);

module.exports = Movie;