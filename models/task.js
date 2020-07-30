var mongoose = require('mongoose');

var task = new mongoose.Schema({
    content: String
});

module.exports = mongoose.model('task', task);