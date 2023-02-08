const express = require("express");
const connectDB = require("./db/voter.db");
const router = require("./routes/voter.route");
const bodyParser = require('body-parser');


const app = express();
const port = 4567;
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to this vote platform"
    });
});

app.use(router);

app.listen(port, () =>{
    console.log("server up and running")
});