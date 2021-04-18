const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")

app.use(cors());
app.use(express.json())

mongoose.connect("mongodb+srv://catalina-admin:fliaJUchyWudg52g@cluster0.xttdr.mongodb.net/notesDB")

app.use("/", require("./routes/noteRoute"))
//if the app is in Production mode use the 
//static files located in the build folder
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(3001, function() {
    console.log("express server is running on port 3001")
})