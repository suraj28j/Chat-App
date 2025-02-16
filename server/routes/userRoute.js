const express = require('express');
const route = express.Router();
const {registerUser, loginUser, searchUser} = require('../controller/userController');


// route.post("/login",authUser)

//http://localhost:3000/api/user/register
route.post("/register",registerUser)

route.post("/login",loginUser)

route.get("/alluser",searchUser)

module.exports = route;