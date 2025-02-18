// chatName
// isGroupChat
// users
// latestMessage
// groupAdmin

const mongoose = require('mongoose')

const chatModel = new mongoose.Schema({
    chatName: {
        type: String,
        trim: true
    },
    isGroupChat: {
        type: Boolean,
        default: false
    },
    users: [{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }],
    latestMessage: {
        type: mongoose.Schema.ObjectId,
        ref: "Message"
    },
    groupAdmin: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
})

// const Chat = mongoose.model("Chat",chatModel);

module.exports = mongoose.model("Chat",chatModel)