const User = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign(
        { id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '7d' }
    )
}

const registerUser = async (req, res) => {

    const { name, email, password, pic } = req.body;

    try {
        let user = await User.findOne({ email: email });
        console.log(user);

        if (user)
            return res.status(400).json({ message: "Email already exists" });

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt);

        user = new User({
            name,
            email,
            password: hashPassword,
            pic
        })
        await user.save();
        res.status(200).json({ success: true, message: "Registration Successful" });
    } catch (error) {
        console.log("Error ", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const loginUser = async (req, res) => {
    
    const { email } = req.body

    try {
        let user = await User.findOne({ email: email })
        if (!user)
            return res.status(404).json({ message: "User not found" });

        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
    
        if (!isPasswordMatch)
            return res.status(404).json({ success: false, messsage: "Failed to login" })

        const token = generateToken(user);

        const { password, pic, ...rest } = user._doc;

        res.status(200).json({ success: true, message: "Login Successful", token, data: { ...rest } });
    } catch (error) {

    }
}

module.exports = { registerUser, loginUser };


