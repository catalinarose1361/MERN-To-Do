const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")
const path = require("path")
const port = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
// app.use(bodyParser.json()); --old will give you a depreciation warning

app.use(cors());

mongoose.connect(process.env.MONGODB_URI)

app.use("/", require("./routes/noteRoute.js"))
//if the app is in Production mode use the 
//static files located in the build folder
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(Port, function() {
    console.log("express server is running")
})