const mongoose = require('mongoose');

const FenceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Add a name"],
        minlength: [3, "Name must be at least 3 characters long"]
    },
    length: {
        type: Number,
        required: [true, "Add a length for your fence"],
        minlength: [1, "Length must be 1 or more"],
    },
    covers: {
        type: String
    },
    finish: {
        type:String
    },
    construction: {
        type:String
    },
    postsNumber: {
        type:Number
    },
    coversNumber: {
        type:Number
    }
}, {timestamps: true});

const Fence = mongoose.model('Fence', FenceSchema);

module.exports = Fence;