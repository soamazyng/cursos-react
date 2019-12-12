const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.uri = 'mongodb://root:admin@webdesingmoderno-j5oja.mongodb.net';

module.exports = mongoose.connect(mongoose.uri, { useMongoClient: true});


