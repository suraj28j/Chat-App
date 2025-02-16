const express = require('express');
const route = express.Router();

const {accessChat} = require('../controller/chatController')
const {authenticate} = require('../auth/verifyToken');

route.post("/",authenticate, accessChat)
// route.get("/", fetchChats)

// route.get("/group", createGroupChat)
// route.put("/rename", renameGroup)
// route.put("/groupremove", removeFromGroup)
// route.put("/addgroup", addToGroup)


module.exports = route;