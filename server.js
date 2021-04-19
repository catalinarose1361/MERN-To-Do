const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")
const path = require("path")
const Port = process.env.PORT || 3001

app.use(cors());
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)

app.use("/", require("./routes/noteRoute"))
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