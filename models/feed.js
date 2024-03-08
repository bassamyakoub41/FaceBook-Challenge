const mongoose = require ('mongoose');
const moment = require( 'moment' );

const FeedSchema = new mongoose.Schema({
    name:{
        type : String, 
        required : true,
        maxlength: [15, 'Message must No longer than 15 characters']
    },
    message:{
        type: String,
        required:true,
        maxlength:[40, 'Message must No longer than 40 characters']
    }, 
    Created_at:{
        type : Date,
        default : Date.now,
        get: function (createdAt) {
            return moment(createdAt).format("MMM Do YY");
        }
    },
});

const Feed= mongoose.model("Feed",FeedSchema);
module.exports =  Feed;