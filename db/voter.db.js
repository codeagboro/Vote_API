const mongoose = require("mongoose")

// connect todatabase
mongoose.set("strictQuery", false)
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/voterDB");
        console.log("connected to voterDB");
    } catch (error) {
       console.log(error);
    }
};

module.exports = connectDB;
