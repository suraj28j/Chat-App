const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const authenticate = (req, res) => {
    const authToken = req.headers.authorization;
    console.log(authToken);
    if (!authToken || !authToken.startWith('Bearer')) {
        return res.status(401).json({ status: false, message: "Authenticate denied" })
    }

    try {
        const token = authToken.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.UserId = decoded.id;
        req.UserName = decoded.name;
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ status: false, message: "Token Expired" });
        }
        res.status(500).json({ status: false, message: "Invalid token, Please login again" });
    }
}

module.exports = authenticate