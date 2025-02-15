const express = require('express');
const dotenv = require('dotenv')
const chats = require('./data/data');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const UserRoute = require('./routes/userRoute');

dotenv.config();
const app = express()

mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connection established");
    } catch (error) {
        console.log("DB connection error ", error);
    }
}

const coreOptions = {
    origin: true,
    credentials: true
}
app.use(cors(coreOptions))
app.use(express.json());
app.use(cookieParser());

// ------------------------------------


app.use("/api/user",UserRoute);


app.get("/api/chat", (req, res) => {
    res.send(chats)
})

app.get("/api/chat/:id", (req, res) => {
    // console.log(req.params.id);
    const singleChat = chats.find((val) => val._id === req.params.id)
    res.send(singleChat);
})

app.get("/", (req, res) => {
    res.send("<h2>API is running</h2>");
})

// -----------------------------------

const PORT = process.env.PORT || 3000

connectDB().then(() => {
    app.listen(3000);
    console.log(`Server started on PORT ${PORT}`);
}).catch((err) => {
    console.log(err);
})
