// backend/db/commentSchema.js
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    comment: { type: String, required: true },
    date_time: { type: Date, default: Date.now },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = commentSchema; 
