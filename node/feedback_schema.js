var mongoose = require( 'mongoose');

var FeedbackSchema = mongoose.Schema({
    username: {type: String, require: true},
    feedback: {type: String, require: true}
})


var FeedbackModel = mongoose.model('feedback', FeedbackSchema);
module.exports = FeedbackModel;