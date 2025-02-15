const express = require('express');
const {registerUser} = require('../controller/userController');

const route = express.Router();

// route.post("/login",authUser)

// http://localhost:3000/api/user/register
route.post("/register",registerUser)

module.exports = route;